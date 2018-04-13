const app = require("./app");
const request = require("supertest");

describe("Query params", () => {
  it("returns 400 if we have the incorrect login credentials", async () => {
    await request(app).get("/?username=asd&password=asd").expect(400);
  });

  it("returns 200 if we have the correct login credentials", async () => {
    await request(app).get("/?username=foo&password=bar").expect(200);
  });

  it("returns 400 if we have the incorrect login credentials", async () => {
    await request(app).get("/login?username=asd&password=asd").expect(400);
  });

  it("returns 200 if we have the correct login credentials", async () => {
    await request(app).get("/login?username=foo&password=bar").expect(200);
  });
});
