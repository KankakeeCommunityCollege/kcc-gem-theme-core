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

export default loadModule;