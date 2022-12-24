const buffer = Buffer.from('hi');
console.log(buffer.toString());

const buffer2 = Buffer.alloc(2);
const buffer3 = Buffer.allocUnsafe(2);
console.log(buffer2);
console.log(buffer3);

buffer2[0] = 68;
buffer2[1] = 69;
console.log(buffer2.toString());

const concatedBuff = Buffer.concat([buffer, buffer2, buffer3]);
console.log(concatedBuff);
