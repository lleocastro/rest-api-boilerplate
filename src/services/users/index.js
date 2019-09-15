import { check, validationResult } from 'express-validator';

import Controller from './controller';

import {
  BASE_API_PREFIX,
  INVALID_EMAIL_SYNTAX,
  INVALID_PASSWORD_SYNTAX,
} from '../../constants';

export default (app, { sequelize }) => {
  app.post(`${BASE_API_PREFIX}/v1/auth`, [
    check('email').isEmail().withMessage(INVALID_EMAIL_SYNTAX),
    check('password').isLength({ min: 6 }).withMessage(INVALID_PASSWORD_SYNTAX),
  ], (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    Controller.authenticate(req, res, { sequelize });
  });
};

export const userController = Controller;
