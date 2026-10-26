"""Revisión de la interfaz con Chromium real (Playwright). Uso: python3 tools/ronda12/ui_real.py [carpeta_salida]
Sirve docs/ por HTTP local, bloquea TODO lo que no sea local (y lo registra) y hace capturas.
Cubre modo infantil (sin cuenta) y adulto (con un SDK de Firebase simulado)."""
import sys, os, threading, http.server, socketserver, functools, json, re
from playwright.sync_api import sync_playwright
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
OUT = sys.argv[1] if len(sys.argv) > 1 else '/tmp/shots'; os.makedirs(OUT, exist_ok=True)
H = functools.partial(http.server.SimpleHTTPRequestHandler, directory=os.path.join(ROOT, 'docs'))
class Q(H.func):
    def log_message(self, *a): pass
httpd = socketserver.TCPServer(('127.0.0.1', 0), functools.partial(Q, directory=os.path.join(ROOT, 'docs')))
PORT = httpd.server_address[1]; threading.Thread(target=httpd.serve_forever, daemon=True).start()
BASE = f'http://127.0.0.1:{PORT}/index.html'
FB_STUB = """(function(){ if(window.firebase) return; var cb=null,user=null;
 var authObj={get currentUser(){return user},onAuthStateChanged:function(f){cb=f;setTimeout(function(){f(user)},50)},setPersistence:function(){return Promise.resolve()},signOut:function(){user=null;cb&&cb(null);return Promise.resolve()}};
 var db={collection:function(n){return {doc:function(){return {get:function(){return Promise.resolve({exists:false,data:function(){return {}}})},set:function(){return Promise.resolve()},delete:function(){return Promise.resolve()}}},add:function(r){(window.__reports=window.__reports||[]).push([n,r]);return Promise.resolve({})}}},enablePersistence:function(){return Promise.resolve()},settings:function(){}};
 window.firebase={initializeApp:function(){return {}},apps:[],auth:Object.assign(function(){return authObj},{Auth:{Persistence:{LOCAL:'local'}},GoogleAuthProvider:function(){},EmailAuthProvider:{credential:function(){}}}),firestore:Object.assign(function(){return db},{FieldValue:{serverTimestamp:function(){return 0},delete:function(){return null}}})};
 window.__fakeLogin=function(u){user=u;cb&&cb(u)}; })();"""
external = []
def new_ctx(p):
    b = p.chromium.launch()
    ctx = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True, locale='es-GT')
    def route(r):
        u = r.request.url
        if u.startswith(f'http://127.0.0.1:{PORT}'): return r.continue_()
        external.append(u)
        if 'firebase-app-compat.js' in u: return r.fulfill(status=200, content_type='application/javascript', body=FB_STUB)
        if 'firebasejs' in u: return r.fulfill(status=200, content_type='application/javascript', body='')
        return r.abort()
    ctx.route('**/*', route); return b, ctx
def shot(page, name): page.screenshot(path=os.path.join(OUT, name + '.png'))
def active(page): return page.evaluate("[...document.querySelectorAll('.screen.active')].map(e=>e.id)")
def wait_screen(page, sid, ms=15000):
    page.wait_for_function("id=>!!document.querySelector('.screen.active#'+id)", arg=sid, timeout=ms)
res = []
def check(c, m): res.append((bool(c), m)); print(('  ✓ ' if c else '  ✗ FALLA: ') + m)
Y = 2026
with sync_playwright() as p:
    print('R1 niño de 10 años (Chromium real)')
    b, ctx = new_ctx(p); page = ctx.new_page(); errs = []
    page.on('pageerror', lambda e: errs.append(str(e)))
    page.goto(BASE); wait_screen(page, 'screen-age-gate'); page.wait_for_timeout(600); shot(page, '01_edad')
    check(not external, 'antes de preguntar la edad no hay NINGUNA petición a servidores externos ' + str(external))
    page.select_option('#ageGateYear', str(Y - 10)); page.evaluate('submitAgeGate()'); page.wait_for_timeout(800)
    shot(page, '02_nino_tras_edad'); print('   pantallas:', active(page))
    check(not any('firebasejs' in u or 'fonts.g' in u for u in external), 'niño: ni Firebase ni Google Fonts (peticiones externas: %s)' % external)
    # avanzar: idioma nativo → compañero → idioma a aprender → app
    page.evaluate("selectNativeLang('es')"); page.evaluate("confirmNativeLang()"); page.wait_for_timeout(500); shot(page, '03_nino_companero')
    page.evaluate("goTo('screen-lang')"); page.evaluate("selectLang('EN')"); page.evaluate("state.quizDone=true"); page.evaluate("afterLangSelect()"); page.wait_for_timeout(1200)
    check('screen-main' in active(page), 'el niño llega a la app principal sin cuenta: ' + str(active(page)))
    shot(page, '04_nino_inicio')
    for tab, nm in (('lessons', '05_nino_lecciones'), ('situations', '06_nino_situaciones'), ('chat', '07_nino_chats'), ('profile', '08_nino_perfil')):
        if tab in ('lessons',): page.evaluate("navTo('home')"); page.evaluate("switchTab('lessons')")
        else: page.evaluate("navTo('%s')" % tab)
        page.wait_for_timeout(700); shot(page, nm)
    txt = page.evaluate("document.body.innerText")
    check(not re.search(r'[\w.]+@[\w.]+\.\w+', page.evaluate("document.getElementById('screen-main').innerText")), 'ninguna pantalla principal muestra un correo')
    page.evaluate("openSettings()"); page.wait_for_timeout(600); shot(page, '09_nino_ajustes')
    page.evaluate("document.querySelector('#screen-settings').scrollTo(0, 99999)"); page.wait_for_timeout(300); shot(page, '10_nino_ajustes_abajo')
    vis = page.evaluate("(()=>{const r=document.getElementById('deleteAccountRow');return r?getComputedStyle(r).display:'(no existe)'})()")
    check(vis == 'none', 'en modo infantil no se ofrece «Eliminar mi cuenta» (display=%s)' % vis)
    page.evaluate("goBack && goBack()"); page.wait_for_timeout(300)
    page.evaluate("showPremModal()"); page.wait_for_timeout(600); shot(page, '11_nino_premium')
    print('   modal premium visible:', page.evaluate("getComputedStyle(document.getElementById('premModal')).display"), '| pantallas', active(page))
    page.evaluate("closePrem && closePrem()")
    page.evaluate("goToChat('free')"); page.wait_for_timeout(800); shot(page, '12_nino_chat_intento'); print('   tras goToChat:', active(page))
    check(not any('groq' in u or 'elevenlabs' in u or 'firebase' in u or 'fonts.g' in u for u in external), 'en todo el recorrido del niño no hay peticiones externas: ' + str(external))
    check(not errs, 'sin errores de JavaScript en la página: ' + str(errs[:3]))
    vis = lambda sel: page.evaluate("(s)=>{const e=document.querySelector(s);return e?getComputedStyle(e).display:'(no existe)'}", sel)
    for sel in ('#mtab-ai', '#bn-chat', '#planPill', '.memory-card', '.prem-banner', '.setting-row[onclick*="showPremModal"]'):
        check(vis(sel) == 'none', 'modo infantil oculta %s (display=%s)' % (sel, vis(sel)))
    page.evaluate("navTo('home')"); page.wait_for_timeout(500)
    ml = page.evaluate("document.getElementById('missionList').innerText")
    check('Primer chat' not in ml and 'Detective' not in ml and 'Lección del día' in ml, 'misiones del niño: sin las de IA, con las de lecciones')
    shot(page, '04b_nino_inicio_corregido')
    page.evaluate("showPremModal()"); page.wait_for_timeout(300)
    check(page.evaluate("getComputedStyle(document.getElementById('premModal')).display") == 'none', 'el niño no puede abrir la ventana de planes ni precios')
    b.close()

    print('R2 adulto (SDK de Firebase simulado)')
    external.clear(); b, ctx = new_ctx(p); page = ctx.new_page(); errs = []
    page.on('pageerror', lambda e: errs.append(str(e)))
    page.goto(BASE); wait_screen(page, 'screen-age-gate'); page.wait_for_timeout(400)
    check(not external, 'adulto: antes de la edad tampoco hay peticiones externas ' + str(external))
    page.select_option('#ageGateYear', str(Y - 30)); page.evaluate('submitAgeGate()'); wait_screen(page, 'screen-login'); page.wait_for_timeout(500); shot(page, '20_adulto_login')
    check(sum('firebasejs' in u for u in external) == 3, 'adulto: tras la edad se piden los 3 módulos de Firebase (%d)' % sum('firebasejs' in u for u in external))
    check(not any('fonts.g' in u for u in external), 'adulto: tampoco se piden tipografías a Google')
    page.evaluate("window.__fakeLogin({uid:'u1',email:'ana@ejemplo.com',displayName:'Ana',providerData:[{providerId:'password'}],emailVerified:true})"); page.wait_for_timeout(2500)
    print('   tras login:', active(page))
    page.evaluate("state.nativeLang='es'; state.quizDone=true; selectLang('EN'); goTo('screen-main'); navTo('home'); updateAllUI()"); page.wait_for_timeout(800)
    for sel in ('#mtab-ai', '#bn-chat', '#planPill', '.prem-banner'):
        check(vis(sel) != 'none', 'adulto SÍ ve %s (display=%s)' % (sel, vis(sel)))
    shot(page, '21_adulto_inicio')
    page.evaluate("showPremModal()"); page.wait_for_timeout(500)
    check(page.evaluate("getComputedStyle(document.getElementById('premModal')).display") == 'flex', 'adulto: la ventana Premium se abre'); shot(page, '22_adulto_premium'); page.evaluate("closePrem()")
    page.evaluate("goTo('screen-chat')"); page.wait_for_timeout(500)
    page.evaluate("addAIMsg('¡Hola! Soy tu tutor.'); addUserMsg('Hola'); addAIMsg('Respuesta de ejemplo de la IA para revisar el botón.')"); page.wait_for_timeout(500); shot(page, '23_adulto_chat_reportar')
    n = page.evaluate("document.querySelectorAll('#chatMsgs .rep-btn').length"); check(n == 1, 'adulto: hay 1 botón «Reportar» en la respuesta de la IA (%d)' % n)
    page.click('#chatMsgs .rep-btn'); page.wait_for_timeout(500); shot(page, '24_adulto_dialogo_reporte')
    check(page.evaluate("!!document.getElementById('repModal')"), 'se abre el diálogo de reporte en el móvil')
    page.click('#repSend'); page.wait_for_timeout(600)
    rep = page.evaluate("window.__reports || []")
    check(len(rep) == 1 and rep[0][0] == 'aiReports' and 'uid' not in rep[0][1] and 'ana@ejemplo.com' not in json.dumps(rep), 'el reporte llega a Firestore (simulado) sin uid ni correo: ' + json.dumps(rep, ensure_ascii=False)[:160])
    check(not errs, 'adulto: sin errores de JavaScript: ' + str(errs[:3]))
    b.close()
print('\nRESULTADO UI:', sum(1 for r in res if r[0]), 'correctas,', sum(1 for r in res if not r[0]), 'fallos')
