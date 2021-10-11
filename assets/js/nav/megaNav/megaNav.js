const errorHandler = err => console.error(`Error loading module:\n${err}`, err);

function loadModule(...argsArr) {
  const module = argsArr[0];
  let fn;
  
  argsArr.length == 1 ? fn = module : fn = argsArr[1];
  import(`./${module}`).then(({default: fn}) => fn());
}

export default function megaNav() {
  import('./toggleMenuOnWindowResize.js').then(({ default: toggleMenuOnWindowResize }) => toggleMenuOnWindowResize())
    .then(() => loadModule('closeMegaNavOnClick', 'closeMenuOnClick'))
    .then(() => loadModule('underlineCurrentSite'))
    .then(() => loadModule('googleCustomSearch', 'googleCustomSearchInit'))
    .catch(err => errorHandler(err));
};
