const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// we need this to be able to send JSON to the server
app.use(bodyParser.json());

/**
 * PUT is how we tell the server
 * that we want to update something
 * that is already created.
 */
app.put("/", (req, res) => {
  const foo = req.body.foo;
  const sum = parseInt(foo) + 1;
  res.json({ foo: sum });
});

module.exports = app;
