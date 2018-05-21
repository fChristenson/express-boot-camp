const express = require("express");
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

const users = {
  bob: {
    name: "Bob"
  },
  anna: {
    name: "Anna"
  }
};

app.get("/users", (req, res) => {
  const len = req.query.limit ? parseInt(req.query.limit) + 1 : users.length;
  const offset = req.query.offset ? parseInt(req.query.offset) : 0;
  const results = Object.values(users).slice(offset, len);
  res.json(results);
});

module.exports = app;
