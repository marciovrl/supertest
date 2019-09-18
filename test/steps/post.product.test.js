const baseUrl = require("../helper/baseUrl");

let assert = require("chai").assert,
  request = require("supertest"),
  expect = require("chai").expect;

let url = baseUrl + "/products";

describe("Validate the functioning of the POST verb of the endpoint /products", () => {
  it("must enter new product", done => {
    request(url)
      .post("/")
      .send({ name: "dog", value: "10", quantity: "4" })
      .end(function(err, res) {
        let result = JSON.parse(res.text);
        assert.equal(res.status, 201);
        done();
      });
  });

  it.skip("should not insert product with empty name value", () => {
    request(url)
      .post("/")
      .send({ name: "", value: "10", quantity: "4" })
      .end(function(err, res) {
        let result = JSON.parse(res.text);
        assert.equal(res.status, 400);
        done();
      });
  });
});
