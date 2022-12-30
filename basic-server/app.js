import express from 'express';
const app = express();

app.all('/park', (req, res, next) => {
  console.log('all');
});

app.use('/myung', (req, res, next) => {
  console.log('use');
});

app.get(
  '/hello',
  (req, res, next) => {
    console.log('first');
    next();
  },
  (req, res, next) => {
    console.log('first-2');
    next();
  }
);

app.get(
  '/hello',
  (req, res, next) => {
    console.log('second');
    next();
  },
  (req, res, next) => {
    console.log('second-2');
    if (true) {
      return res.send('finished!');
    }
    res.send('finished!');
  }
);

app.use((req, res, next) => {
  res.status(404).send('not found ㅜㅜ');
});

app.use((error, req, res, next) => {
  console.error(error);
  res.send('not found @-@');
});
app.listen(8080);
