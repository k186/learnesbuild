/**
 * Created by k186 on 2021/7/21.
 * Name:
 * GitHub:
 * Email: k1868548@gmail.com
 */

import compA from "./components/compA";

let component = {
  compA
}
import("./components/compB").then(res => {
  component.compB = res;
})


export default component