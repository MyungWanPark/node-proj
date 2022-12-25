const EventEmitter = require('events');

class CustomEventClass extends EventEmitter {
  log(callback) {
    this.emit('myungwan', {
      name: 'hong',
      age: 33,
    });
    callback();
    this.emit('myungwan', {
      address: 'Seoul',
    });
  }
}

module.exports.CustomEventClass = CustomEventClass;
