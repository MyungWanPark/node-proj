const fs = require('fs');

/* const beforeMemoryUsage = process.memoryUsage().rss;
fs.readFile('info.txt', (err, data) => {
  fs.writeFile('new-info.txt', data, () => {});
  const afterMemoryUsage = process.memoryUsage().rss;
  const diff = afterMemoryUsage - beforeMemoryUsage;
  const consumed = diff / 1024 / 1024;
  console.log('memory usage = ', diff);
  console.log('consumed = ', `${consumed}mb`);
}); */

const readStream = fs
  .createReadStream('info.txt', {
    highWaterMark: 128,
    encoding: 'utf-8',
  })
  .on('data', () => {
    console.count('data');
  })
  .on('error', console.error);

console.log('readStream = ', readStream);
