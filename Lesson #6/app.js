const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// we need this to be able to send JSON to the server
app.use(bodyParser.json());

/**
 * If we want to tell the client that they need to be
 * logged in we send 401 or 403
 */
app.get("/", (req, res) => {
  res.status(401).end();
});

/**
 * If we want to tell the client that they tried to do
 * something that was not correct we send 400
 */
app.post("/", (req, res) => {
  const { username, password } = req.body;
  if (username === "foo" && password === "bar") {
    res.status(200).end();
  }
  res.status(400).end();
});

/**
 * If we redirect the client we send 301 or 302
 */
app.get("/moved", (req, res) => {
  res.redirect("/");
});

module.exports = app;
