// Bootstrap 5 JS Modules
// Default BS 5 JS:
// import Alert from 'bootstrap/js/dist/alert';
// import base-component from 'bootstrap/js/dist/base-component';
// import Button from 'bootstrap/js/dist/button';
// import Carousel from 'bootstrap/js/dist/carousel';
// import Collapse from 'bootstrap/js/dist/collapse';
// import Dropdown from 'bootstrap/js/dist/dropdown';
// import Modals from 'bootstrap/js/dist/modal';
// import Offcanvas from 'bootstrap/js/dist/offcanvas';
// import Popper from 'bootstrap/js/dist/popper';
// import Scrollspy from 'bootstrap/js/dist/scrollspy';
// import Tab from 'bootstrap/js/dist/tab';
// import Toast from 'bootstrap/js/dist/toast';
// import Tooltip from 'bootstrap/js/dist/tooltip';

function bootstrap() {
  import('bootstrap/js/dist/collapse').then(({default: Collapse}) => Collapse)
    // .then(() => import('bootstrap/js/dist/button').then(({default: Button}) => Button)) // Buttons is for toggling
    .then(() => import('bootstrap/js/dist/dropdown').then(({default: Dropdown}) => Dropdown))
    .then(() => document.querySelector('[data-bs-toggle="modal"]') ? import('bootstrap/js/dist/modal').then(({default: Modal}) => Modal) : null)
    .then(() => document.querySelector('.nav-tabs[role="tablist"]') ? import('bootstrap/js/dist/tab').then(({default: Tab}) => Tab) : null)
}

export default bootstrap;