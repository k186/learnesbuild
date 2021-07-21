var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function(obj, key, value) {
  return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
};
var __spreadValues = function(a, b) {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var props = __getOwnPropSymbols(b), i = 0, n = props.length, prop; i < n; i++) {
      prop = props[i];
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

// src/components/compA.js
var compA_default = {
  name: "compA",
  getName() {
    return this.name;
  }
};

// src/components/compB.js
var compB_default = {
  name: "compB",
  ability: {},
  getName() {
    return this.name;
  },
  initStatus(name, abilities = { run: true }) {
    if (this.name === name) {
      this.ability = __spreadValues({}, abilities);
    } else {
      console.error("wrong name");
    }
  }
};

// src/main.js
var main_default = {
  compA: compA_default,
  compB: compB_default
};
export {
  main_default as default
};
//# sourceMappingURL=index.js.map
