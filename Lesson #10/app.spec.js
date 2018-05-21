const app = require("./app");
const request = require("supertest");

describe("Rendering", () => {
  it("returns a rendered string", async () => {
    const res = await request(app).get("/").expect(200);
    expect(res.text).toEqual("foo: undefined");
  });

  it("returns a rendered string with a value", async () => {
    const res = await request(app).get("/?foo=1").expect(200);
    expect(res.text).toEqual("foo: 1");
  });

  it("returns a rendered html string", async () => {
    const res = await request(app).get("/html").expect(200);
    const text = "<!DOCTYPE html><html><body>  </body></html>";
    const formatted = res.text.trim().replace(/\n/g, "");
    expect(formatted).toEqual(text);
  });

  it("returns a rendered html string with a value", async () => {
    const res = await request(app).get("/html?foo=1").expect(200);
    const text = "<!DOCTYPE html><html><body>  1</body></html>";
    const formatted = res.text.trim().replace(/\n/g, "");
    expect(formatted).toEqual(text);
  });
});
