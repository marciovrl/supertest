const { schema } = require("../schemas/schema_products");
const baseUrl = require("../helper/baseUrl");

let request = require("supertest");

let url = baseUrl + "/products";

describe("Contract testing of endpoint /products", () => {
  it("validate contract of GET in /products", done => {
    request(url)
      .get("/")
      .expect("Content-Type", /json/)
      .end(function(err, res) {
        schema.validate(res.body[0]);
        done();
      });
  });

  it("validate contract of POST in /products", done => {
    request(url)
      .post("/")
      .send({ name: "tatu", value: "10", quantity: "5" })
      .expect("Content-Type", /json/)
      .end(function(err, res) {
        schema.validate(res.body[0]);
        done();
      });
  });
});
