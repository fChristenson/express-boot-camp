const app = require("./app");
const request = require("supertest");

describe("Put json", () => {
  it("can PUT /", async () => {
    await request(app).put("/").expect(200);
  });

  it("/ should return two foo's", async () => {
    const res = await request(app).put("/").expect(200).send({ foo: 1 });
    const expected = { foo: 2 };
    const actual = res.body;
    expect(actual).toEqual(expected);
  });
});
