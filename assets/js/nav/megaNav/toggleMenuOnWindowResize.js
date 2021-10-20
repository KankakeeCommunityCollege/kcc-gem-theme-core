// Updated for Bootstrap 5 - 10/19/21
import Collapse from 'bootstrap/js/dist/collapse';
// Custom JS to Close the Navigation menu, if its open, & if the screen goes above 992px wide (Bootstrap 4 'lg' devices)
const NAVBAR_COLLAPSE_SELECTOR = '.navbar-toggler--multi-collapse'; // ID built into the sites' HTML

function collapseElement(el) {
  const bsCollapse = new Collapse(el, { toggle: false })
  
  bsCollapse.hide()
}

function checkNavbarCollapseState(menuEl) {
  if ( menuEl.classList.contains('show') ) { // 'show' is a Bootstrap 4 class that makes `.collapse` items visible. // Checking to see if the Menu is open
    collapseElement(menuEl);
  }
}

function windowResizeHandler() {
  if ( window.innerWidth >= 992 ) {
    const nodeList = document.querySelectorAll(NAVBAR_COLLAPSE_SELECTOR);
    
    [...nodeList].forEach(el => checkNavbarCollapseState(el));
  }
}

function toggleMenuOnWindowResize() {
  window.addEventListener('resize', windowResizeHandler);
}

export default toggleMenuOnWindowResize;
