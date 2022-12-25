const { CustomEventClass } = require('./CustomEventClass.js');

const customClass = new CustomEventClass();

customClass.on('myungwan', (args) => {
  console.log(args);
});

customClass.log(() => console.log('doing something...'));
