console.log("log..");
console.time("timer1");
setTimeout(() => {
  console.timeEnd("timer1");
}, 0);
let num = 0;
const interval1 = setInterval(() => {
  console.log(num++);
}, 1000);

setTimeout(() => {
  clearTimeout(interval1);
}, 6000);
