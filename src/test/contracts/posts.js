const request = require('supertest');
const { schema } = require('../../schemas/posts.js');
const baseUrl = require('../../helper/baseUrl');

const url = `${baseUrl}posts`;

describe('Contract testing of endpoint /products', () => {
  it('validate contract of GET in /posts', (done) => {
    request(url)
      .get('/')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        schema.validate(res.body[0]);
        done();
      });
  });

  it('validate contract of POST in /posts', (done) => {
    request(url)
      .post('/')
      .send({ tittle: 'Supertest', body: 'Exemplo Supertest' })
      .expect('Content-Type', /json/)
      .end((err, res) => {
        schema.validate(res.body[0]);
        done();
      });
  });
});
