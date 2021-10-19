const NAVBAR_COLLAPSE_ID = 'headerGlobalNavbarContent';
const HEADER_GLOBAL = '.header-global';
const header = document.querySelector(HEADER_GLOBAL);

function addClassToOpenNavbar() {
  const navbarCollapse = document.getElementById(NAVBAR_COLLAPSE_ID);

  navbarCollapse.addEventListener('show.bs.collapse', e => header.classList.add('header-global__open'));
  navbarCollapse.addEventListener('hide.bs.collapse', e => header.classList.remove('header-global__open'));
}

export default addClassToOpenNavbar;