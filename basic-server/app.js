import express from 'express';
const app = express();
app.use(express.json());

app.post('/hello', (req, res, next) => {
  console.log(req.body);
  res.send('accepted!');
});

app.use((req, res, next) => {
  res.status(404).send('not found ㅜㅜ');
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('not found @-@');
});
app.listen(8080);
