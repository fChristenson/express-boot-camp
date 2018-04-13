const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// we need this to be able to send JSON to the server
app.use(bodyParser.json());

/**
 * POST is how we tell the server that we
 * want to create something, or just send
 * something to the server.
 */
app.post("/", (req, res) => {
  const foo = req.body.foo;
  res.json({ foo });
});

module.exports = app;
