import express from 'express';

const app = express();
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send('about users, method = GET /');
});

router.get('/:id', (req, res, next) => {
  res.status(200).send('about users, method = get, url users/:id');
});

export default router;
