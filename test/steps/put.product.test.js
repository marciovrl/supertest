const baseUrl = require("../helper/baseUrl");

let assert = require("chai").assert,
  request = require("supertest"),
  expect = require("chai").expect;

let url = baseUrl + "/products";

describe("Validate the functioning of the PUT verb of the endpoint /products", () => {
  it("should edit a products value value", done => {
    request(url)
      .put("/name/gato/")
      .send({ name: "gato", value: 5, quantity: 5 })
      .end(function(err, res) {
        let result = JSON.parse(res.text);
        assert.equal(res.status, 201);
        done();
      });
  });

  it("must edit quantity value of a product", done => {
    request(url)
      .put("/name/gato/")
      .send({ name: "gato", value: 5, quantity: 50 })
      .end(function(err, res) {
        let result = JSON.parse(res.text);
        assert.equal(res.status, 201);
        done();
      });
  });

  it.skip("should not edit value value if string value is entered", done => {
    request(url)
      .put("/name/gato/")
      .send({ name: "gato", value: "abc", quantity: 5 })
      .end(function(err, res) {
        let result = JSON.parse(res.text);
        assert.equal(res.status, 400);
        done();
      });
  });
});
