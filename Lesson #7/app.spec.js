const app = require("./app");
const request = require("supertest");

describe("Content type", () => {
  it("returns 400 if we have the incorrect login credentials", async () => {
    await request(app)
      .post("/")
      .set("Content-Type", "application/json")
      .expect(400)
      .send({ username: "asd", password: "asd" });
  });

  it("returns 200 if we have the correct login credentials", async () => {
    await request(app)
      .post("/")
      .set("Content-Type", "application/json")
      .expect(200)
      .send({ username: "foo", password: "bar" });
  });

  it("returns 400 if we have the incorrect login credentials", async () => {
    await request(app)
      .post("/")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .expect(400)
      .send({ username: "asd", password: "asd" });
  });

  it("returns 200 if we have the correct login credentials", async () => {
    await request(app)
      .post("/")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .expect(200)
      .send({ username: "foo", password: "bar" });
  });
});
