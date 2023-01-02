import express from 'express';
import postRouter from './router/post.js';
import usersRouter from './router/users.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

/* const option = {
  dotfiles: 'ignore',
  maxAge: '1d',
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
    res.set('x-hello', Date.now());
  },
}; */

const app = express();
app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet());
app.use('/post', postRouter);
app.use('/users', usersRouter);
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://127.0.0.1:5500'],
  })
);
// app.use(express.static('public'));
app.get('/', (req, res, next) => {
  res.send('hello');
});
app.listen(8080);
