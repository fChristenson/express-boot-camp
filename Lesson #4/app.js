const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// we need this to be able to send JSON to the server
app.use(bodyParser.json());

/**
 * DELETE is how we tell the server that
 * we want to delete something.
 */
app.delete("/", (req, res) => {
  res.json({ foo: 0 });
});

module.exports = app;
