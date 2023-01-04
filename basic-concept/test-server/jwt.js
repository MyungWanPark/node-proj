import jwt from 'jsonwebtoken';

const secret = '%h7273rvv9i5w^qwu0*s';
const token = jwt.sign(
  {
    userId: 'myungwan',
    isAdmin: true,
  },
  secret,
  {
    expiresIn: 2,
  }
);

setTimeout(() => {
  jwt.verify(token, secret, (err, decoded) => {
    console.log(err);
    console.log(decoded);
  });
}, 3000);

// console.log(`token = ${token}`);
