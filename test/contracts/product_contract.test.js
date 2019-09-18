const { schema } = require("../schemas/schema_products");
const baseUrl = require("../helper/baseUrl");

let request = require("supertest"),
  joiAssert = require("joi-assert");

let url = baseUrl + "/products";

describe("Contract testing of endpoint /products", () => {
  it("validate contract of GET in /products", done => {
    request(url)
      .get("/")
      .expect("Content-Type", /json/)
      .end(function(err, res) {
        let result = JSON.parse(res.text);
        joiAssert(res.body[0], schema);
        done();
      });
  });

  it("validate contract of POST in /products", done => {
    request(url)
      .post("/")
      .send({ name: "tatu", value: "10", quantity: "5" })
      .expect("Content-Type", /json/)
      .end(function(err, res) {
        let result = JSON.parse(res.text);
        joiAssert(res.body, schema);
        done();
      });
  });
});
