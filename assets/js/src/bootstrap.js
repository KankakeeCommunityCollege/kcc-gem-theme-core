// Bootstrap 5 JS Modules
// List of all available default BS-5 JS modules bellow:
//
// import Alert from 'bootstrap/js/dist/alert';                    // Only for inline dismissal of alerts
// import base-component from 'bootstrap/js/dist/base-component';  // Used by another module // Do NOT import directly
// import Button from 'bootstrap/js/dist/button';                  // For button-state toggling
// import Carousel from 'bootstrap/js/dist/carousel';              // BS-5 image-slider/carousel // We use `slick-carousel`
// import Collapse from 'bootstrap/js/dist/collapse';              // Collapse // Used to collapse navigation bars and other content
// import Dropdown from 'bootstrap/js/dist/dropdown';              // Used for dropdown menu functionality // Requires Poppers 2 in BS-5
// import Modals from 'bootstrap/js/dist/modal';                   // Required for modal-window functionality
// import Offcanvas from 'bootstrap/js/dist/offcanvas';            // For off-canvass navigation
// import Popper from 'bootstrap/js/dist/popper';                  // Popper.js 2 // Only import if you want to use Popperjs methods directly (Popper is already imported by Dropdown.)
// import Scrollspy from 'bootstrap/js/dist/scrollspy';            //
// import Tab from 'bootstrap/js/dist/tab';
// import Toast from 'bootstrap/js/dist/toast';
// import Tooltip from 'bootstrap/js/dist/tooltip';

function bootstrap() {
  import('bootstrap/js/dist/collapse').then(({default: Collapse}) => Collapse)  // Collapse
    // .then(() => import('bootstrap/js/dist/button').then(({default: Button}) => Button)) // Buttons is for toggling
    .then(() => import('bootstrap/js/dist/dropdown').then(({default: Dropdown}) => Dropdown))
    .then(() => document.querySelector('[data-bs-toggle="modal"]') ? import('bootstrap/js/dist/modal').then(({default: Modal}) => Modal) : null)
    .then(() => document.querySelector('.nav-tabs[role="tablist"]') ? import('bootstrap/js/dist/tab').then(({default: Tab}) => Tab) : null)
}

export default bootstrap;