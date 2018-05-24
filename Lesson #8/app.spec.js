const app = require("./app");
const request = require("supertest");

describe("Query params", () => {
  it("returns 400 if we have the incorrect login credentials", async () => {
    await request(app)
      .get("/?username=asd&password=asd&password=asd")
      .expect(400);
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

  // pagination can be achieved easily when using query parameters
  it("returns a list of users with the correct length", async () => {
    const res = await request(app).get("/users/?limit=0&offset=0").expect(200);
    const body = res.body;

    expect(Array.isArray(body)).toEqual(true);
    expect(body.length).toEqual(2);
    expect(body[0].name).toEqual("Bob");
    expect(body[1].name).toEqual("Anna");
  });

  it("returns a list of users with the correct length", async () => {
    const res = await request(app).get("/users/?limit=1&offset=0").expect(200);
    const body = res.body;

    expect(Array.isArray(body)).toEqual(true);
    expect(body.length).toEqual(1);
    expect(body[0].name).toEqual("Bob");
  });

  it("returns a list of users with the correct length", async () => {
    const res = await request(app).get("/users/?limit=1&offset=1").expect(200);
    const body = res.body;

    expect(Array.isArray(body)).toEqual(true);
    expect(body.length).toEqual(1);
    expect(body[0].name).toEqual("Anna");
  });
});
