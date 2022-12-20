const path = require('path');

console.log(__dirname);
console.log(__filename);
console.log(path.sep);
console.log(path.delimiter);

console.log(path.basename(__filename, '.js'));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));

const parsed = path.parse(__filename);
console.log(parsed);
console.log(__filename);
console.log(path.normalize('./folder////ddd'));
console.log(path.join(__dirname, 'font'));