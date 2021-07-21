/**
 * Created by k186 on 2021/7/21.
 * Name:
 * GitHub:
 * Email: k1868548@gmail.com
 */
export default {
  name: 'compB',
  ability: {},
  getName() {
    return this.name;
  },
  initStatus(name, abilities = {run: true}) {
    if (this.name === name) {
      this.ability = {...abilities}
    } else {
      console.error('wrong name');
    }
  }
}