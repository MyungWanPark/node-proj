console.log("log..."); // 개발 기록용
console.info("정보 기록용");
console.warn("배포시 경고용");
console.error("치명적 에러 발생시");

const temp = { a: "hello", b: "venus" };
console.table(temp);

console.time();
for (let i = 0; i < 100; i++) {}
console.timeEnd();

function a() {
  b();
}

function b() {
  c();
}

function c() {
  console.trace();
}

a();
