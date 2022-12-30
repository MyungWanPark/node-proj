import express from 'express';
const app = express();

app.get('/hello/:id', (req, res, next) => {
  // console.log(req.url);
  // console.log(req.headers);
  console.log(req.params.id);
  console.log(req.query.query);
  res.send('hi!');
});

app.listen(8080);
