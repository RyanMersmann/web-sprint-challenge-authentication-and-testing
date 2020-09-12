const supertest = require("supertest");

const server = require("./server.js");


// checks the server
describe("server", function () {
  it("runs the tests", function () {
    expect(true).toBe(true);
  });

  // checks if the server response with an HTTP 200 status
  describe("GET /", function () {
    it("should respond with 200 OK", function () {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    // checks if the server response with json
    it("should respond with JSON", function () {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.type).toMatch(/json/i);
        });
    });

    // checks if the api (localhost:5000/) '/' returns a welcome string
    it("should respond with api: 'Get Ready for some dad jokes!'", function () {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.body.api).toBe("Get Ready for some dad jokes!");
        });
    });
  });
});