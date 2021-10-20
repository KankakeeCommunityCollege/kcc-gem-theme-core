import '../../scss/kcc-theme.scss'; // Webpack compiles the main stylesheet from this sass file import
import loadModule from './loadModule'; // See module's comments for usage/syntax

const errorHandler = err => console.error(`Error loading module:\n${err}`, err);
// Accordions and tabbed-content have these unique selectors in the HTML
const accordionOrTabSelector = document.querySelector('#accordion') || document.querySelector('.navTabs');
const path = window.location.pathname;

function loadScript(src, callback) {
  const script = document.createElement('script');

  script.src = src;
  script.addEventListener('load', () => callback());
  document.head.append(script);
}

document.addEventListener('DOMContentLoaded', () => {
  import('./bootstrap').then(({ default: bootstrap }) => bootstrap)  // Imports only the BS-5 components we use.
    .then( bootstrap => {
      bootstrap(); // This enables BS-5 functionality for components already built into the page
      // JS requiring Bootstrap 5 goes here
      let loadAlertsPromise = new Promise((resolve, reject) => {
        if (document.getElementById('emergencyAlerts')) {
          loadScript('https://apis.google.com/js/api.js', () => {
            import('../alerts/alerts.js').then(({ default: alerts }) => {
              alerts();
              resolve();
            });
          });
        } else resolve();
      });
      loadAlertsPromise
      .then(() => window.localStorage.getItem('userPrefersReducedMotion') ? loadModule('checkForPrefersReducedMotion') : null)
      .then(() => accordionOrTabSelector ? loadModule('contentHashLink') : null)
      .then(() => accordionOrTabSelector ? loadModule('addAccordionOrTabHistoryStates') : null)
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
      .then(() => import('../nav/megaNav/megaNav.js').then(({ default: megaNav }) => megaNav()))
      .catch( err => errorHandler(err));
    });


  


  // loadScript('https://apis.google.com/js/api.js', () => {
  //   .then(() => import('../alerts/alerts.js').then(({ default: alerts }) => alerts()))
  //   .then(() => loadModule('checkForPrefersReducedMotion'))
  //   .then(() => accordionOrTabSelector ? loadModule('contentHashLink') : null)
  //   .then(() => accordionOrTabSelector ? loadModule('addAccordionOrTabHistoryStates') : null)
  //   .then(() => window.location.hostname.search(/\.kcc\.edu/) !== -1 ? loadModule('loadClarusCorpScript') : null)
  //   .then(() => {
  //     if ( document.querySelector('.hero-slider__slider') ) {
  //       import('../../scss/slick-carousel.scss')
  //         .then(() => loadModule('wrapPowerText'))
  //         .then(() => loadModule('sliders', 'initSliders'))
  //     }
  //   })
  //   .then(() => document.querySelector('img[data-src]') ? loadModule('lazyLoad') : null)
  //   .then(() => loadModule('walkText', 'walkText', document.body))
  //   .then(() => loadModule('footerDate'))
  //   .then(() => loadModule('addClassToOpenNavbar'))
  //   .then(() => path == '/settings/' ? loadModule('userSettings') : null)
  //   .then(() => {
  //     if (window.localStorage.getItem('darkModeSetting') == 'true' || path == '/settings/') {
  //       import('./darkMode').then(({ default: darkMode }) => darkMode)
  //         .then(darkMode => {
  //         import('../../scss/darkMode.scss').then(() => {
  //           darkMode();
  //         });
  //       })
  //     }
  //   })
  //   .then(() => path == '/search/' ? import('../../scss/searchPageOverrides.scss') : null)
  //   .then(() => {
  //     return document.getElementById('google_translate_element') ?
  //       loadModule('translateScript', 'watchForMenuClicks')
  //     : null;
  //   }).then(() => document.getElementById('errorPageSearch') ? loadModule('errorPageSearch', 'errorPageSearch') : null)
  //   .catch( err => errorHandler(err));
  // });
});
