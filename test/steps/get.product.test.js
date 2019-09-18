const baseUrl = require("../helper/baseUrl");

let assert = require("chai").assert,
  request = require("supertest"),
  expect = require("chai").expect;

let url = baseUrl + "/products";

describe("Validate the functioning of the GET verb of the endpoint /products", () => {
  it("must list products registered", done => {
    request(url)
      .get("/")
      .end(function(err, res) {
        let result = JSON.parse(res.text);
        assert.equal(res.status, 200);
        assert.equal(result[0].name, "cachorro");
        assert.equal(result[0].value, "100");
        assert.equal(result[0].quantity, "10");
        done();
      });
  });
});
