import '@babel/polyfill';

import { post } from '../../test';

import {
  BASE_API_PREFIX,
  EMAIL_OR_PASSWORD_INCORRECT,
  INVALID_EMAIL_SYNTAX,
  INVALID_PASSWORD_SYNTAX,
} from '../../../src/constants';

describe('User Service', () => {
  describe('Authenticate', () => {
    const URL = `${BASE_API_PREFIX}/v1/auth`;

    it('Should authenticate with valid credentials and retrieve token', (done) => {
      const payload = {
        email: 'adao@system.com.br',
        password: process.env.ADAO_PASSWORD,
      };

        return post(URL, payload).expect(({ body }) => {
          expect(body).toHaveProperty('token');
          expect(body.token).not.toBe('');
      }).end((err) => {
        if (err) return done(err);
        done();
      });
    });

    it('Should authenticate with invalid credentials and get an error', (done) => {
      const payload = {
        email: 'adao@system.com.br',
        password: 'fooooo',
      };
      return post(URL, payload, 400).expect(({ body: { errors } }) => {
        const error = errors[0];
        expect(error).not.toBeUndefined();
        expect(error).toHaveProperty('msg', EMAIL_OR_PASSWORD_INCORRECT);
      }).end((err) => {
        if (err) return done(err);
        done();
      });
    });

  it('Should authenticate with not credentials and get an error', (done) => {
      const payload = {};
      return post(URL, payload, 400).expect(({ body: { errors } }) => {
        expect(errors[0]).not.toBeUndefined();
        expect(errors[0]).toHaveProperty('msg', INVALID_EMAIL_SYNTAX);
        expect(errors[1]).not.toBeUndefined();
        expect(errors[1]).toHaveProperty('msg', INVALID_PASSWORD_SYNTAX);
      }).end((err) => {
        if (err) return done(err);
        done();
      });
    });
  });
  
});
