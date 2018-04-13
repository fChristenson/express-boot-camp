const app = require("./app");
const request = require("supertest");

describe("Status codes", () => {
  it("can GET /", async () => {
    await request(app).get("/").expect(200);
  });

  it("can PUT /", async () => {
    await request(app).put("/").expect(200).send({ foo: 1 });
  });

  it("can POST /", async () => {
    await request(app).post("/").expect(201).send({ foo: 1 });
  });

  it("can DELETE /", async () => {
    await request(app).delete("/").expect(202);
  });

  it("can fail to GET /fail", async () => {
    await request(app).get("/fail").expect(404);
  });

  it("can fail to GET /error", async () => {
    await request(app).get("/error").expect(500);
  });

  it("can fail to POST /error", async () => {
    await request(app).post("/error").expect(405);
  });
});
