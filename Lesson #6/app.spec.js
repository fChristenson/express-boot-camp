const app = require("./app");
const request = require("supertest");

describe("Status codes", () => {
  it("returns 401 if we need to login", async () => {
    await request(app).get("/").expect(401);
  });

  it("returns 400 if we have the incorrect login credentials", async () => {
    await request(app)
      .post("/")
      .expect(400)
      .send({ username: "asd", password: "asd" });
  });

  it("returns 200 if we have the correct login credentials", async () => {
    await request(app)
      .post("/")
      .expect(200)
      .send({ username: "foo", password: "bar" });
  });

  it("returns 302 if we have tried to use a route that has moved", async () => {
    await request(app).get("/moved").expect(302);
  });
});
