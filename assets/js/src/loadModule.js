function loadModule(...moduleArgs) {
  const module = moduleArgs[0];
  let defaultFunc;
  let funcArg = undefined;
  
  moduleArgs.length > 1 ? defaultFunc = moduleArgs[1] : defaultFunc = moduleArgs[0];
  moduleArgs.length > 2 ? funcArg = moduleArgs[2] : null;
  import(`./${module}`).then(({ default: defaultFunc }) => {
    funcArg = undefined ? defaultFunc() : defaultFunc(funcArg);
  });
}
//
//  Usage:
//
//    loadModule(arg1, arg2, arg3);
//
//    Where:
//      arg1 - Name of the module - *required*
//      arg2 - Modules' default function which becomes the callback function after module is loaded - *optional*
//      arg3 - Argument to pass to the default function - *optional and requires arg2*
export default loadModule;