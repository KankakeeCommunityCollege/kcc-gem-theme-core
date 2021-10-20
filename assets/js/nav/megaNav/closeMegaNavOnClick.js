// Updated for Bootstrap 5 - 10/19/21
import Collapse from 'bootstrap/js/dist/collapse';

const NAV_LINKS_SELECTOR = '.nav-link:not(.dropdown-toggle)';  // Bootstrap 4 class
const MENU_COLLAPSE_SELECTOR = '#headerGlobalNavbarContent'; // Bootstrap 4 crap that requires $() w/ an ID from the HTML
const MENU_COLLAPSE = 'headerGlobalNavbarContent';  // ID from the HTML
const HIDE = 'hide';  // Bootstrap 4 class
const SHOW = 'show';  // Bootstrap 4 class

function hideBootstrapMenu() {
  const header = document.querySelector(MENU_COLLAPSE_SELECTOR);
  const bsCollapse = new Collapse(header, { toggle: false });

  bsCollapse.hide();
}

function checkIfMenuIsOpen() {
  if ( document.getElementById(MENU_COLLAPSE).classList.contains(SHOW) ) {
    return true;
  }
  return false;
}

function hideMenuIfOpen(menuIsOpen) {
  if ( menuIsOpen ) {
    hideBootstrapMenu();
  } else {
    return;
  }
}

function clickHandlerFunction(e) {
  if ( !e.target.matches(NAV_LINKS_SELECTOR) )  // Bail out of the rest of the code if the click event's target is not what we want!
    return;

  if ( e.target.classList.contains('dropdown-toggle') )
    return;


  const menuIsOpen = checkIfMenuIsOpen();

  hideMenuIfOpen(menuIsOpen);
}

function addEventListenerFunction(element, clickEvent) {
  element.addEventListener(clickEvent, clickHandlerFunction, false);
}

function closeMenuOnClick() {
  const clickEvent = 'click';
  const element = document;

  addEventListenerFunction(element, clickEvent);
}

export default closeMenuOnClick;
