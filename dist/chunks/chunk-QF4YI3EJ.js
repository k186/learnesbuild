var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __markAsModule = function(target) {
  return __defProp(target, "__esModule", { value: true });
};
var __require = function(x) {
  if (typeof require !== "undefined")
    return require(x);
  throw new Error('Dynamic require of "' + x + '" is not supported');
};
var __reExport = function(target, module, desc) {
  if (module && typeof module === "object" || typeof module === "function")
    for (var keys = __getOwnPropNames(module), i = 0, n = keys.length, key; i < n; i++) {
      key = keys[i];
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: function(k) {
          return module[k];
        }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
  return target;
};
var __toModule = function(module) {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: function() {
    return module.default;
  }, enumerable: true } : { value: module, enumerable: true })), module);
};

export {
  __spreadValues,
  __require,
  __toModule
};
//# sourceMappingURL=chunk-QF4YI3EJ.js.map
