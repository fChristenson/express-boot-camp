const app = require("./app");
const request = require("supertest");

describe("Middleware", () => {
  it("returns one foo", async () => {
    const res = await request(app).get("/").expect(200);
    expect(res.body).toEqual({ foo: 1 });
  });

  it("returns two foo", async () => {
    const res = await request(app).get("/?foo=1").expect(200);
    expect(res.body).toEqual({ foo: 2 });
  });

  it("rejects a user who has not token", async () => {
    const res = await request(app).delete("/users/bob").expect(200);
    expect(res.body).toEqual({ message: "No token" });
  });

  it("rejects a user who is not an admin", async () => {
    const res = await request(app).delete("/users/bob?token=foo").expect(200);
    expect(res.body).toEqual({ message: "You are not an admin" });
  });

  it("accepts a user who is admin with a token", async () => {
    const res = await request(app)
      .delete("/users/bob?token=foo")
      .set("X-admin", true) // custom headers always start with an X-
      .expect(200);
    expect(res.body).toEqual({ message: "Bob was removed" });
  });

  it("redirects to login if you are not logged in", async () => {
    await request(app).get("/welcome").expect(302);
  });
});
