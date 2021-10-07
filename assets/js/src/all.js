import '../../scss/kcc-theme.scss';

function loadModule(...moduleArgs) {
  const module = moduleArgs[0];
  let defaultFunc;
  let funcArg = undefined;
  
  moduleArgs.length > 1 ? defaultFunc = moduleArgs[1] : defaultFunc = moduleArgs[0];
  moduleArgs.length > 2 ? funcArg = moduleArgs[2] : null;

  import(`./${module}`).then(({ default: defaultFunc }) => {
    funcArg = undefined ? defaultFunc() : defaultFunc(funcArg);
  });
}

window.addEventListener('load', () => {
    import('../nav/megaNav/megaNav.js').then(({default: megaNav}) => {
      megaNav();
    })
});

document.addEventListener('DOMContentLoaded', function () {
  import('../alerts/alerts.js').then(({default : alerts}) => alerts());
  window.location.hostname.search(/\.kcc\.edu/) !== -1 ? loadModule('loadClarusCorpScript') : null;
  loadModule('wrapPowerText');
  loadModule('sliders', 'initSliders');
  loadModule('walkText', 'walkText', document.body);
  loadModule('footerDate');
  loadModule('lazyLoad');
  loadModule('addClassToOpenNavbar');

  if (window.localStorage.getItem('darkModeSetting') == 'true' || window.location.pathname == '/settings/') {
    import('./darkMode').then(({ default: darkMode }) => {
      return darkMode;
    }).then(darkMode => {
      import('../../scss/darkMode.scss').then(() => {
        darkMode();
      });
    })
  }
  if (window.location.pathname == "/search/") {
    import('../../scss/searchPageOverrides.scss').then(() => {
    }).catch( err => console.error(`Error loading searchPageOverrides.scss \n${err}`, err) );
  }
  document.getElementById('google_translate_element') ? loadModule('translateScript', 'watchForMenuClicks') : null;
  document.getElementById('errorPageSearch') ? loadModule('errorPageSearch', 'errorPageSearch') : null;
});
