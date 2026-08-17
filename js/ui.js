/* ═══════════════════════════════════════
   THEME
═══════════════════════════════════════ */
function applyTheme(id){
  state.theme=id;
  document.documentElement.setAttribute('data-theme',id);
  save();
  renderThemeGrid();
  window._themeId = id;
}

/* Colores de acento por tema, solo para pintar la muestra plana del selector.
   El resto de la UI ya se resuelve con las variables CSS de themes.css. */
var THEME_SWATCH = {
  dark:'#ff9d3d', light:'#7c5cff', amoled:'#e5e5e5', forest:'#34c77b',
  ocean:'#2bb0e6', purple:'#a06bff', ruby:'#ef4a5f', ice:'#2ba7d1',
  sand:'#c4831a'
};

function renderThemeGrid(){
  var grid=document.getElementById('themeGrid'); if(!grid) return;

  grid.innerHTML=THEMES.map(function(t){
    var locked=t.free===false&&!state.isPremium;
    var color=THEME_SWATCH[t.id]||'#7c5cff';
    var isActive=state.theme===t.id;
    var lock=locked?'<div style="position:absolute;inset:0;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;font-size:15px;border-radius:inherit">&#128274;</div>':'';
    var action=locked?"showPremModal()":"applyTheme('"+t.id+"')";
    var activeBorder=isActive?'border-color:'+color:'';
    return '<div class="theme-card '+(isActive?'active-theme':'')+'" onclick="'+action+'" style="'+activeBorder+'">'
      +'<div class="theme-preview" style="background:'+color+'">'
        +(isActive?'<span class="theme-check">&#10003;</span>':'')
        +lock
      +'</div>'
      +'<div class="theme-name" style="'+(isActive?'color:'+color:'')+'">'+t.name+'</div>'
      +'</div>';
  }).join('');
}



/* Navigation, profile rendering and toasts live in app.js, loaded after this
   theme module. Keeping one owner prevents silent global-function overrides. */

