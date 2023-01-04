import bcrypt from 'bcrypt';

const password = 'abcd1234';
const salt = 10;
const hashed = bcrypt.hashSync(password, salt);
console.log(`password = ${password} hashed = ${hashed}`);

const result = bcrypt.compareSync(password, hashed);
console.log(`result = ${result}`);
