import express from 'express';
import { body, param, validationResult } from 'express-validator';

const app = express();

app.use(express.json());
app.post(
  '/users',
  [
    body('name')
      .isLength({ min: 2 })
      .withMessage('이름은 두 글자 이상이여야 합니다!!'),
    body('email').isEmail().withMessage('이메일을 정확하게 입력해주세요.'),
  ],
  (req, res, next) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    res.sendStatus(201);
  }
);

app.get(
  '/:age',
  param('age').isInt().withMessage('숫자를 입력해 주세요.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    res.send('나이 요청이 잘 도착했어요.');
  }
);
app.listen(8080);
