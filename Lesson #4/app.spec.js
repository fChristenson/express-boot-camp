const app = require("./app");
const request = require("supertest");

describe("delete json", () => {
  it("can DELETE /", async () => {
    await request(app).delete("/").expect(200);
  });

  it("/ should return zero foo's", async () => {
    const res = await request(app).delete("/").expect(200);
    const expected = { foo: 0 };
    const actual = res.body;
    expect(actual).toEqual(expected);
  });
});
