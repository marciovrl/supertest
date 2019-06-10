const baseUrl = require('../helper/baseUrl')

let assert = require('chai').assert,
    request = require('supertest'),
    expect = require('chai').expect;

let url = baseUrl + '/products';

describe('Validate the functioning of the DELETE verb of the endpoint /products', () => {
    
    beforeEach (function () {
        return request(url).post(baseUrl)
        .send({name: "pato", value: "10", quantity: "4"})
        .end(function(err, res) {
            let result = JSON.parse(res.text);
            assert.equal(res.status, 201);
            done();
        });
    });

    it ('must delete product', function(done){
        request(url)
        .delete('/name/pato')
        .expect(201, done)
    });
});