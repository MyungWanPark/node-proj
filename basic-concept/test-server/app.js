import express from 'express';
import { body, param, validationResult } from 'express-validator';

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()[0].msg });
  }
  next();
};

const app = express();

app.use(express.json());
app.post(
  '/users',
  [
    body('name')
      .trim()
      .isLength({ min: 2 })
      .withMessage('이름은 두 글자 이상이여야 합니다!!'),
    body('email')
      .normalizeEmail()
      .isEmail()
      .withMessage('이메일을 정확하게 입력해주세요.'),
    validate,
  ],
  (req, res, next) => {
    console.log(req.body);

    res.sendStatus(201);
  }
);

app.get(
  '/:age',
  [param('age').isInt().withMessage('숫자를 입력해 주세요.'), validate],
  (req, res, next) => {
    res.send('나이 요청이 잘 도착했어요.');
  }
);
app.listen(8080);
