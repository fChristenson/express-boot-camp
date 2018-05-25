const app = require("./app");
const request = require("supertest");

describe("Error handling", () => {
  it("returns 400 if we send a bar", async () => {
    const res = await request(app).get("/?bar=1").expect(400);
    expect(res.body).toEqual({ error: "Bar is not ok" });
  });

  it("returns 400 if we send a baz", async () => {
    const res = await request(app).get("/?baz=1").expect(400);
    expect(res.body).toEqual({ error: "Baz is not ok" });
  });

  it("returns 500 if we send a foobar", async () => {
    const res = await request(app).get("/?foobar=1").expect(500);
    expect(res.body).toEqual({ error: "wtf is going on" });
  });

  it("returns 200 if we send a foo", async () => {
    const res = await request(app).get("/?foo=1").expect(200);
    expect(res.body).toEqual({ foo: 1 });
  });
});
