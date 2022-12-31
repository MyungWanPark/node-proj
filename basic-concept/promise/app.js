const promise = new Promise((resolve, reject) => {
  console.log('doing something....');
  setTimeout(() => {
    resolve('parkmyungwan');
    // reject(new Error('something went wrong myungwan!'));
  }, 1000);
});

promise //
  .then((value) => {
    return new Promise((resolve, reject) => {
      // resolve(`${value} love Ellie`);
      reject(`${value} love Ellie with error`);
    });
  })
  .catch((value) => {
    return `${value} with catch to continue promise`;
  })
  .then((value) => {
    return new Promise((resolve, reject) => {
      resolve(`${value} with not calling resolve function`);
    });
  })
  .then(console.log);
// .then(console.log)
