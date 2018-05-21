const app = require("./app");
const request = require("supertest");

describe("Path variables", () => {
  it("returns 404 if we have the wrong url", async () => {
    await request(app).get("/fail").expect(404);
  });

  it("returns a list of users if we have the correct url", async () => {
    const res = await request(app).get("/users").expect(200);
    const body = res.body;

    expect(Array.isArray(body)).toEqual(true);
    expect(body.length).toEqual(2);
  });

  it("returns Bob if we have the correct url", async () => {
    const res = await request(app).get("/users/bob").expect(200);
    const body = res.body;

    expect(body.name).toEqual("Bob");
  });

  it("returns Anna if we have the correct url", async () => {
    const res = await request(app).get("/users/anna").expect(200);
    const body = res.body;

    expect(body.name).toEqual("Anna");
  });

  it("returns Anna and Bob if we have the correct url", async () => {
    const res = await request(app).get("/users/anna/bob").expect(200);
    const body = res.body;

    expect(Array.isArray(body)).toEqual(true);
    expect(body.length).toEqual(2);
    expect(body[0].name).toEqual("Anna");
    expect(body[1].name).toEqual("Bob");
  });

  // url variables are not the same thing as query parameters
  // you can add whatever you want behind the question mark
  // and it will still match the servers url pattern
  it("returns Anna and Bob if we have the correct url with query parameters", async () => {
    const res = await request(app).get("/users/anna/bob?foo=1").expect(200);
    const body = res.body;

    expect(Array.isArray(body)).toEqual(true);
    expect(body.length).toEqual(2);
    expect(body[0].name).toEqual("Bob");
    expect(body[1].name).toEqual("Anna");
  });

  it("returns Anna and Bob's names if we have the correct url", async () => {
    const res = await request(app).get("/users/anna/bob/names").expect(200);
    const body = res.body;

    expect(Array.isArray(body)).toEqual(true);
    expect(body.length).toEqual(2);
    expect(body[0]).toEqual("Anna");
    expect(body[1]).toEqual("Bob");
  });

  // a common strategy
  // we can use url variables to find a user
  // and we can user query parameters to change the behaviour
  it("returns a users name if we have the correct url", async () => {
    const res = await request(app).get("/users/anna?name=1").expect(200);
    const body = res.body;

    expect(body.username).toEqual("Anna");
  });
});
