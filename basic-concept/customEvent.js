const EventEmitter = require('events');
const emitter = new EventEmitter();
const callback1 = (args) => {
  console.log('first event fired! with args = ', args);
};
const callback2 = (args) => {
  console.log('second event fired! with args = ', args);
};

emitter.on('myungwan', callback1);
emitter.on('myungwan', callback2);

emitter.emit('myungwan', { name: 'myungwan', age: 30 });
emitter.removeListener('myungwan', callback1);
emitter.emit('myungwan', { name: 'myungwan', age: 30 });
