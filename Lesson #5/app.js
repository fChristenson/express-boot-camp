const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// we need this to be able to send JSON to the server
app.use(bodyParser.json());

/**
 * If a GET is successful we return status 200
 * by convention.
 */
app.get("/", (req, res) => {
  res.json({ foo: 1 });
});

/**
 * If a PUT is successful we return status 200
 * by convention.
 */
app.put("/", (req, res) => {
  const foo = req.body.foo;
  const sum = parseInt(foo) + 1;
  res.json({ foo: sum });
});

/**
 * If a POST is successful we return status 200 or 201
 * by convention.
 */
app.post("/", (req, res) => {
  const foo = req.body.foo;
  res.status(201).json({ foo });
});

/**
 * If a DELETE is successful we return status 200 or 202
 * by convention.
 */
app.delete("/", (req, res) => {
  const foo = req.body.foo;
  res.status(202).json({ foo: 0 });
});

/**
 * If a something breaks on our server we return 500
 * by convention.
 */
app.get("/error", (req, res) => {
  res.status(500).end();
});

/**
 * If someone tries to use the incorrect
 * http method we return 405
 */
app.all("/error", (req, res) => {
  res.status(405).end();
});

// any missing routes should be communicated by sending 404
module.exports = app;
