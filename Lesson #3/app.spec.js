const app = require("./app");
const request = require("supertest");

describe("post json", () => {
  it("can POST /", async () => {
    await request(app).post("/").expect(200);
  });

  it("/ should return one foo", async () => {
    const res = await request(app).post("/").expect(200).send({ foo: 1 });
    const expected = { foo: 1 };
    const actual = res.body;
    expect(actual).toEqual(expected);
  });
});
