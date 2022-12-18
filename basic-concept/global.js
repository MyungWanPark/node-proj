const fs = require("fs");

global.hello = () => {
  console.log("hello");
};
// console.log(global);
global.hello();
