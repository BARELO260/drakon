"""Genera capturas 1080x1920 para la ficha de Play con Chromium real (contenido real de la app, sin simular nada).
Uso: python3 tools/ronda12/capturas_play.py [carpeta_salida]   (por defecto play/capturas)"""
import sys, os, threading, http.server, socketserver, functools
from playwright.sync_api import sync_playwright
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, 'play', 'capturas'); os.makedirs(OUT, exist_ok=True)
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
httpd = socketserver.TCPServer(('127.0.0.1', 0), functools.partial(Q, directory=os.path.join(ROOT, 'docs')))
PORT = httpd.server_address[1]; threading.Thread(target=httpd.serve_forever, daemon=True).start()
with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={'width': 360, 'height': 640}, device_scale_factor=3, is_mobile=True, has_touch=True, locale='es-GT')
    ctx.route('**/*', lambda r: r.continue_() if r.request.url.startswith(f'http://127.0.0.1:{PORT}') else r.abort())
    page = ctx.new_page(); page.goto(f'http://127.0.0.1:{PORT}/index.html')
    page.wait_for_function("!!document.querySelector('.screen.active#screen-age-gate')", timeout=20000); page.wait_for_timeout(500)
    page.select_option('#ageGateYear', str(2026 - 10)); page.evaluate('submitAgeGate()'); page.wait_for_timeout(800)
    page.evaluate("selectNativeLang('es'); confirmNativeLang()"); page.wait_for_timeout(500)
    page.evaluate("goTo('screen-lang'); selectLang('EN'); state.quizDone=true; afterLangSelect()"); page.wait_for_timeout(1500)
    page.evaluate("navTo('home')"); page.wait_for_timeout(600); page.screenshot(path=os.path.join(OUT, '1_inicio.png'))
    page.evaluate("switchTab('lessons')"); page.wait_for_timeout(800); page.screenshot(path=os.path.join(OUT, '2_lecciones.png'))
    page.evaluate("navTo('situations')"); page.wait_for_timeout(800); page.screenshot(path=os.path.join(OUT, '3_situaciones.png'))
    page.evaluate("navTo('profile')"); page.wait_for_timeout(800); page.screenshot(path=os.path.join(OUT, '4_perfil.png'))
    b.close()
print(sorted(os.listdir(OUT)))
