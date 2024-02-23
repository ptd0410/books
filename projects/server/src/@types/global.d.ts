interface CustomNodeJSGlobal extends NodeJS.Global {
  myGlobalVariable: unknown;
}
declare const global: CustomNodeJSGlobal;

global.myGlobalVariable = "Hi mom, look at me, I am global!";

console.log({ myGlobalVariable: global.myGlobalVariable });
