const express = require("express");
const app = express();

/**
 * GET is how we fetch data from a server.
 * It is the way we tell the server that we
 * only want to "GET" something.
 */
app.get("/", (req, res) => {
  res.json({ foo: 1 });
});

module.exports = app;
