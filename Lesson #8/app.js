const express = require("express");
const bodyParser = require("body-parser");
const app = express();

/**
 * If we want to tell the client that they tried to do
 * something that was not correct we send 400
 */
app.get("/", (req, res) => {
  // NEVER DO THIS, EVER!
  const { username, password } = req.query;
  if (username === "foo" && password === "bar") {
    res.status(200).end();
  }
  res.status(400).end();
});

/**
 * If we want to tell the client that they tried to do
 * something that was not correct we send 400
 */
app.get("/login", (req, res) => {
  // NEVER DO THIS, EVER!
  const { username, password } = req.query;
  if (username === "foo" && password === "bar") {
    res.status(200).end();
  }
  res.status(400).end();
});

module.exports = app;
