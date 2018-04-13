const app = require("./app");
const request = require("supertest");

describe("Get json", () => {
  it("can GET /", async () => {
    await request(app).get("/").expect(200);
  });

  it("/ should return one foo", async () => {
    const res = await request(app).get("/").expect(200);
    const expected = { foo: 1 };
    const actual = res.body;
    expect(actual).toEqual(expected);
  });
});
