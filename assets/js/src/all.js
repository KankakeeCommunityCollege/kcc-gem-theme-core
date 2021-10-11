import '../../scss/kcc-theme.scss';
import loadModule from './loadModule'; // loadModule takes the following arguments:
// arg1 - Name of the module - required
// arg2 - Modules' default function which becomes the callback function after module is loaded - optional
// arg3 - Argument to pass to the default function - optional and requires arg2
// Syntax: loadModule(arg1, arg2, arg3).then(...)... // uses Webpack dynamic imports which is Promise based
const errorHandler = err => console.error(`Error loading module:\n${err}`, err);

window.addEventListener('load', () => {
  import('../nav/megaNav/megaNav.js') // This JS can wait until window.onload.
    .then(({ default: megaNav }) => megaNav())
    .catch(err => errorHandler(err));
});

document.addEventListener('DOMContentLoaded', () => {
  import('../alerts/alerts.js').then(({ default: alerts }) => alerts())
    .then(() => window.location.hostname.search(/\.kcc\.edu/) !== -1 ? loadModule('loadClarusCorpScript') : null)
    .then(() => document.querySelector('.hero-slider__slider') ? loadModule('wrapPowerText') : null)
    .then(() => document.querySelector('.hero-slider__slider') ? loadModule('sliders', 'initSliders') : null)
    .then(() => loadModule('walkText', 'walkText', document.body))
    .then(() => loadModule('footerDate'))
    .then(() => loadModule('lazyLoad'))
    .then(() => loadModule('addClassToOpenNavbar'))
    .then(() => window.location.pathname == '/settings/' ? loadModule('userSettings') : null)
    .then(() => {
      if (window.localStorage.getItem('darkModeSetting') == 'true' || window.location.pathname == '/settings/') {
        import('./darkMode').then(({ default: darkMode }) => darkMode)
          .then(darkMode => {
          import('../../scss/darkMode.scss').then(() => {
            darkMode();
          });
        })
      }
    })
    .then(() => window.location.pathname == '/search/' ? import('../../scss/searchPageOverrides.scss') : null)
    .then(() => {
      return document.getElementById('google_translate_element') ?
        loadModule('translateScript', 'watchForMenuClicks')
      : null;
    }).then(() => document.getElementById('errorPageSearch') ? loadModule('errorPageSearch', 'errorPageSearch') : null)
    .catch( err => errorHandler(err));
});
