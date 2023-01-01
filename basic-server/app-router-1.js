import express from 'express';
import postRouter from './router/post.js';
import usersRouter from './router/users.js';
import cors from 'cors';

/* const option = {
  dotfiles: 'ignore',
  maxAge: '1d',
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
    res.set('x-hello', Date.now());
  },
}; */

const app = express();

app.use('/post', postRouter);
app.use('/users', usersRouter);
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://127.0.0.1:5500'],
  })
);
app.use(express.static('public'));
app.listen(8080);
