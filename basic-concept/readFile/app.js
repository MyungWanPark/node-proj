const fs = require('fs').promises;

fs.readFile('info2.txt', 'utf8') //
  .then(console.log)
  .catch(console.error);

fs.writeFile('info2.txt', 'hello dreams!') //
  .catch(console.error);

fs.appendFile('new-info.txt', 'Sint non voluptate anim exercitation veniam.')
  .then(() => console.log('done!'))
  .catch(console.error); //;
