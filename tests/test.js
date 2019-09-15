import '@babel/polyfill';
import request from 'supertest';

import setup from '../src/app';

const app = setup();

export default () => {
  return request(app);
};

export const get = (url, status = 200) => {
  return request(app).get(url)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(status);
};

export const post = (url, payload = {}, status = 200) => {
  return request(app).post(url).send(payload)
    .expect('Content-Type', /json/)
    .expect(status);
};
