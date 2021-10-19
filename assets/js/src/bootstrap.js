// Bootstrap 5 JS Modules
// import alert from 'bootstrap/js/dist/alert';
// import base-component from 'bootstrap/js/dist/base-component';
// import button from 'bootstrap/js/dist/button';
// import carousel from 'bootstrap/js/dist/carousel';
// import collapse from 'bootstrap/js/dist/collapse';
// import dropdown from 'bootstrap/js/dist/dropdown';
// import modals from 'bootstrap/js/dist/modal';
// import offcanvas from 'bootstrap/js/dist/offcanvas';
// import popper from 'bootstrap/js/dist/popper';
// import scrollspy from 'bootstrap/js/dist/scrollspy';
// import tab from 'bootstrap/js/dist/tab';
// import toast from 'bootstrap/js/dist/toast';
// import tooltip from 'bootstrap/js/dist/tooltip';

function bootstrap() {
  import('bootstrap/js/dist/alert').then(({default: alert}) => alert)
    .then(() => import('bootstrap/js/dist/button').then(({default: button}) => button))
    .then(() => import('bootstrap/js/dist/collapse').then(({default: collapse}) => collapse))
    .then(() => import('bootstrap/js/dist/dropdown').then(({default: dropdown}) => dropdown))
    .then(() => import('bootstrap/js/dist/modal').then(({default: modal}) => modal))
    .then(() => import('bootstrap/js/dist/tab').then(({default: tab}) => tab))
    .then(() => import('bootstrap/js/dist/collapse').then(({default: collapse}) => collapse))
}

export default bootstrap;