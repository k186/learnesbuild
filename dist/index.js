import {
  __require,
  __toModule
} from "./chunks/chunk-QF4YI3EJ.js";

// src/components/compA.js
var compA_default = {
  name: "compA",
  getName() {
    return this.name;
  }
};

// src/main.js
var component = {
  compA: compA_default
};
Promise.resolve().then(() => __toModule(__require("./chunks/compB-7ENBIN35.js"))).then((res) => {
  component.compB = res;
});
var main_default = component;
export {
  main_default as default
};
//# sourceMappingURL=index.js.map
