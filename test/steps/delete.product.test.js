const baseUrl = require('../helper/baseUrl')

let assert = require('chai').assert,
    request = require('supertest'),
    expect = require('chai').expect;

let url = baseUrl + '/products';

describe('Validate the functioning of the DELETE verb of the endpoint /products', () => {

    it ('must delete product', function(done){
        request(url)
        .delete('/name/galinha')
        .expect(201, done)
    });

});