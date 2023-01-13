const { MyMath } = require("./MyMath");
class Component {
  render() {
    console.log("render");
  }
}
console.log('5+8=',MyMath.sum(5, 8));
exports.Component = Component;
