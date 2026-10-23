#!/usr/bin/env python3
"""Ronda 11 (backend) — cierra tres huecos hallados al auditar functions/index.js y firestore.rules.
Uso: python3 aplicar_backend.py <ruta_del_proyecto>
 1. firestore.rules: el cliente ya no puede escribirse parentalConsentStatus='approved' ni cambiar su
    birthYear una vez fijado (ni guardar un año inválido): el servidor se fía de esos campos.
 2. functions/index.js: la edad se lee con ageFromProfile() (solo años enteros válidos); sin edad válida no hay
    chat para menores ni voz; un menor no puede verificar compras.
 3. functions/index.js: un purchaseToken de Google Play queda ligado a la primera cuenta que lo verifica
    (antes, una misma suscripción podía activar Premium en cuentas ilimitadas)."""
import sys
D=sys.argv[1] if len(sys.argv)>1 else '.'
def rd(p): return open(D+'/'+p,encoding='utf8',newline='').read()
def wr(p,t): open(D+'/'+p,'w',encoding='utf8',newline='').write(t)
def sub(p,a,b,n=1):
    t=rd(p);nl='\r\n' if '\r\n' in t else '\n'
    a=a.replace('\r\n','\n').replace('\n',nl);b=b.replace('\r\n','\n').replace('\n',nl)
    c=t.count(a);assert c==n,(p,a[:70],c);wr(p,t.replace(a,b))

# ── firestore.rules ──
sub('firestore.rules',"""    match /users/{uid} {
      allow read: if request.auth != null && request.auth.uid == uid;

      allow create: if request.auth != null && request.auth.uid == uid
                    && !('isPremium' in request.resource.data)
                    && !('premiumExpiresAt' in request.resource.data);
""","""    // Campos de edad: el servidor (functions/index.js) se fía de ellos, así que el
    // cliente no puede (a) darse a sí mismo parentalConsentStatus='approved', ni
    // (b) cambiar su año de nacimiento una vez fijado, ni (c) guardar un año inválido.
    function ageFieldsOk(){
      return request.resource.data.get('birthYear', null) == null
             || (request.resource.data.birthYear is int
                 && request.resource.data.birthYear >= 1900
                 && request.resource.data.birthYear <= 2100);
    }

    match /users/{uid} {
      allow read: if request.auth != null && request.auth.uid == uid;

      allow create: if request.auth != null && request.auth.uid == uid
                    && !('isPremium' in request.resource.data)
                    && !('premiumExpiresAt' in request.resource.data)
                    && ageFieldsOk()
                    && request.resource.data.get('parentalConsentStatus', null) != 'approved';
""")
sub('firestore.rules',"""                    && !request.resource.data.diff(resource.data).affectedKeys()
                          .hasAny(['isPremium', 'premiumExpiresAt']);
""","""                    && !request.resource.data.diff(resource.data).affectedKeys()
                          .hasAny(['isPremium', 'premiumExpiresAt'])
                    && ageFieldsOk()
                    // 'approved' solo puede venir del servidor (SDK de administrador)
                    && (request.resource.data.get('parentalConsentStatus', null)
                          == resource.data.get('parentalConsentStatus', null)
                        || request.resource.data.get('parentalConsentStatus', null) != 'approved')
                    // el año de nacimiento no se puede cambiar una vez fijado
                    && (resource.data.get('birthYear', null) == null
                        || request.resource.data.get('birthYear', null) == resource.data.get('birthYear', null));
""")

# ── functions/index.js ──
sub('functions/index.js',"""function validateText(value, max, label){""","""// Edad a partir del perfil REAL guardado en Firestore. Devuelve null si no consta
// o no es un año entero válido (un valor manipulado nunca se interpreta como «adulto»).
function ageFromProfile(profile){
  const y = profile && profile.birthYear;
  const now = new Date().getFullYear();
  if(!Number.isInteger(y) || y < 1900 || y > now) return null;
  return now - y;
}

function validateText(value, max, label){""")
sub('functions/index.js',"""    if(!profileChat.birthYear) throw new HttpsError('failed-precondition','Complete the age check first.');
    if((new Date().getFullYear()-profileChat.birthYear)<13 && profileChat.parentalConsentStatus!=='approved'){""","""    const ageChat=ageFromProfile(profileChat);
    if(ageChat===null) throw new HttpsError('failed-precondition','Complete the age check first.');
    if(ageChat<13 && profileChat.parentalConsentStatus!=='approved'){""")
sub('functions/index.js',"""    if(!profile.birthYear || (new Date().getFullYear()-profile.birthYear)<18){""","""    const ageTts=ageFromProfile(profile);
    if(ageTts===null || ageTts<18){""")
sub('functions/index.js',"""  let publisher;
  try{ publisher = await getAndroidPublisher(); }""","""  // Las compras no están disponibles para menores de 13 años.
  const buyerProfile = (await getFirestore().collection('users').doc(uid).get()).data() || {};
  const buyerAge = ageFromProfile(buyerProfile);
  if(buyerAge !== null && buyerAge < 13) throw new HttpsError('permission-denied','Purchases are not available for this account.');

  let publisher;
  try{ publisher = await getAndroidPublisher(); }""")
sub('functions/index.js',"""  if(!isActive){
    throw new HttpsError('failed-precondition', 'This subscription is not currently active.');
  }
""","""  if(!isActive){
    throw new HttpsError('failed-precondition', 'This subscription is not currently active.');
  }

  // Un purchaseToken queda ligado a la PRIMERA cuenta que lo verifica: sin esto,
  // una misma suscripción podía activar Premium en cualquier número de cuentas.
  const tokenId = require('crypto').createHash('sha256').update(purchaseToken).digest('hex');
  const tokenRef = getFirestore().collection('playPurchaseTokens').doc(tokenId);
  await getFirestore().runTransaction(async tx => {
    const owner = (await tx.get(tokenRef)).data();
    if(owner && owner.uid !== uid) throw new HttpsError('already-exists','This purchase is already linked to another account.');
    if(!owner) tx.set(tokenRef, { uid, productId, createdAt: Date.now() });
  });
""")
print('backend actualizado')
