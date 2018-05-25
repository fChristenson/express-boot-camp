const app = require("./app");
const request = require("supertest");

describe("Cookies", () => {
  it("a cookie with one foo", async () => {
    const res = await request(app).get("/foo").expect(200);
    expect(res.get("Cookie")).toEqual("foo=1");
  });

  it("a cookie with one foobar", async () => {
    const res = await request(app).get("/foobar").expect(200);
    expect(res.get("Cookie")).toEqual("foo=1;bar=1");
  });

  it("includes a cookie", async () => {
    const res = await request(app)
      .get("/increment")
      .set("Cookie", "foo=1")
      .expect(200);
    expect(res.get("Cookie")).toEqual("foo=2");
  });
});
