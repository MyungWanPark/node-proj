import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();
app.use(express.json());

app.get('/file1', (req, res) => {
  const data = fs.readFile('/file1.txt', (err, data) => {
    res.status(500).json({ message: 'file not found 😥' });
  });
});

app.get('/file2', (req, res, next) => {
  fsAsync.readFile('/file1.txt').then().catch(next);
});

app.get('/file3', async (req, res) => {
  try {
    const data = await fsAsync.readFile('/file1.txt');
  } catch (err) {
    res.status(500).json({ message: 'file not found 😥' });
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'something went wrong 😥' });
});
app.listen(8080);
