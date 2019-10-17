const { schema } = require("../../schemas/posts.js");
const baseUrl = require("../../helper/baseUrl");

let request = require("supertest");

let url = baseUrl + "posts";

describe("Contract testing of endpoint /products", () => {
  it("validate contract of GET in /posts", done => {
    request(url)
      .get("/")
      .expect("Content-Type", /json/)
      .end(function(err, res) {
        schema.validate(res.body[0]);
        done();
      });
  });

  it("validate contract of POST in /posts", done => {
    request(url)
      .post("/")
      .send({ tittle: "Supertest", body: "Exemplo Supertest" })
      .expect("Content-Type", /json/)
      .end(function(err, res) {
        schema.validate(res.body[0]);
        done();
      });
  });
});
