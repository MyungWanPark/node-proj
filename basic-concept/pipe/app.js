const fs = require('fs');
const zlib = require('zlib');

/* const writeStream = fs.createWriteStream('./info-3.txt');
writeStream.on('finish', () => {
  console.log('finished !!');
});
writeStream.write('hello');
writeStream.write('world!');
writeStream.end(); */

const readStream = fs.createReadStream('info.txt');
const writeStream = fs.createWriteStream('info-5.zip');
const zlibStream = zlib.createGzip();
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on('finish', () => {
  console.log('done!!!!');
});
