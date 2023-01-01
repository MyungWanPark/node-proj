import express from 'express';
import postRouter from './router/post.js';
import usersRouter from './router/users.js';

const app = express();

app.use('/post', postRouter);
app.use('/users', usersRouter);

app.listen(8080);
