import {
  __spreadValues
} from "./chunk-QF4YI3EJ.js";

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
export {
  compB_default as default
};
//# sourceMappingURL=compB-7ENBIN35.js.map
