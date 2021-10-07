function loadModule(...argsArr) {
  const module = argsArr[0];
  let fn;
  
  argsArr.length == 1 ? fn = module : fn = argsArr[1];
  console.log(module, fn);
  return import(`./${module}`).then(({default: fn}) => fn());
}

export default function megaNav() {
  loadModule('toggleMenuOnWindowResize');
  loadModule('closeMegaNavOnClick', 'closeMenuOnClick');
  loadModule('underlineCurrentSite');
  loadModule('googleCustomSearch', 'googleCustomSearchInit');
};
