const { assert } = require('chai');
const request = require('supertest');
const baseUrl = require('../../helper/baseUrl');

const url = `${baseUrl}posts`;

describe('Validate the functioning of the GET verb of the endpoint /posts', () => {
  it('must list posts registered', (done) => {
    request(url)
      .get('/')
      .end((err, res) => {
        assert.equal(res.status, 200);
        done();
      });
  });
});

describe('Validate the functioning of the POST verb of the endpoint /posts', () => {
  it('must enter new post', (done) => {
    request(url)
      .post('/')
      .send({ tittle: 'Supertest', body: 'Exemplo Supertest' })
      .end((err, res) => {
        assert.equal(res.status, 201);
        done();
      });
  });

  it.skip('should not insert post with empty tittle value', (done) => {
    request(url)
      .post('/')
      .send({ body: 'Exemplo Supertest' })
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });
});

describe('Validate the functioning of the PUT verb of the endpoint /posts', () => {
  it('should edit a post tittle', (done) => {
    request(url)
      .put('/100/')
      .send({ tittle: 'Supertest', body: 'Exemplo Supertest' })
      .end((err, res) => {
        assert.equal(res.status, 200);
        done();
      });
  });

  it.skip('do not edit empty tittle value information', (done) => {
    request(url)
      .put('/100/')
      .send({ body: 'Exemplo Supertest' })
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });
});

describe('Validate the functioning of the DELETE verb of the endpoint /posts', () => {
  beforeEach(() => request(url)
    .post(baseUrl)
    .send({ tittle: 'Supertest', body: 'Exemplo Supertest' }));

  it('must delete post', (done) => {
    request(url).delete('/100/').expect(200, done);
  });
});
