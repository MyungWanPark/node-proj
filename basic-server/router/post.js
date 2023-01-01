import express from 'express';

const app = express();
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send('about post, method = GET /');
});

router.get('/:id', (req, res, next) => {
  res.status(200).send('about post, method = get, url post/:id');
});

export default router;
