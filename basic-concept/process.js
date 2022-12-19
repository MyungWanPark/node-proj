const process = require("process");

console.log(process.cpuUsage());
console.log(process.resourceUsage());
console.log(process.arch);
console.log(process.title);
console.log(process.pid);
console.log(process.ppid);
console.log(process.config);
console.log(process.env);
console.log(process.execPath);
console.log(process.cwd());
console.log(process.argv0);

setTimeout(() => {
  console.log("setTimeout!");
}, 0);

process.nextTick(() => {
  console.log("nextTick!");
});

for (let i = 0; i < 10; i++) {
  console.log("log..");
}
