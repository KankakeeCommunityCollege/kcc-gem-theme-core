import '../../scss/kcc-theme.scss';
import loadModule from './loadModule'; // loadModule takes the following arguments:
// arg1 - Name of the module - required
// arg2 - Modules' default function which becomes the callback function after module is loaded - optional
// arg3 - Argument to pass to the default function - optional and requires arg2
// Syntax: loadModule(arg1, arg2, arg3).then(...)... // uses Webpack dynamic imports which is Promise based
const errorHandler = err => console.error(`Error loading module:\n${err}`, err);
const accordionOrTabSelector = document.querySelector('#accordion') || document.querySelector('.navTabs')
const path = window.location.pathname;

function loadScript(src, callback) {
  const script = document.createElement('script');

  script.src = src;
  script.addEventListener('load', () => callback())
  document.head.append(script);
}

window.addEventListener('load', () => {
  import('../nav/megaNav/megaNav.js') // This JS can wait until window.onload.
    .then(({ default: megaNav }) => megaNav())
    .catch(err => errorHandler(err));
});

document.addEventListener('DOMContentLoaded', () => {
  loadScript('https://apis.google.com/js/api.js', () => {
    import('../alerts/alerts.js').then(({ default: alerts }) => alerts())
      .then(() => loadModule('checkForPrefersReducedMotion'))
      .then(() => accordionOrTabSelector ? loadModule('contentHashLink') : null)
      .then(() => accordionOrTabSelector ? loadModule('addAccordionOrTabHistoryStates') : null)
      .then(() => window.location.hostname.search(/\.kcc\.edu/) !== -1 ? loadModule('loadClarusCorpScript') : null)
      .then(() => {
        if ( document.querySelector('.hero-slider__slider') ) {
          import('../../scss/slick-carousel.scss')
            .then(() => loadModule('wrapPowerText'))
            .then(() => loadModule('sliders', 'initSliders'))
        }
      })
      .then(() => document.querySelector('img[data-src]') ? loadModule('lazyLoad') : null)
      .then(() => loadModule('walkText', 'walkText', document.body))
      .then(() => loadModule('footerDate'))
      .then(() => loadModule('addClassToOpenNavbar'))
      .then(() => path == '/settings/' ? loadModule('userSettings') : null)
      .then(() => {
        if (window.localStorage.getItem('darkModeSetting') == 'true' || path == '/settings/') {
          import('./darkMode').then(({ default: darkMode }) => darkMode)
            .then(darkMode => {
            import('../../scss/darkMode.scss').then(() => {
              darkMode();
            });
          })
        }
      })
      .then(() => path == '/search/' ? import('../../scss/searchPageOverrides.scss') : null)
      .then(() => {
        return document.getElementById('google_translate_element') ?
          loadModule('translateScript', 'watchForMenuClicks')
        : null;
      }).then(() => document.getElementById('errorPageSearch') ? loadModule('errorPageSearch', 'errorPageSearch') : null)
      .catch( err => errorHandler(err));
  });
});
