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
  const lenInt = parseInt(req.query.limit);
  const offsetInt = parseInt(req.query.offset);
  const len = lenInt > 0 ? lenInt : users.length;
  const offset = offsetInt > 0 ? offsetInt : 0;
  const results = Object.values(users)
    .slice(offset, users.length)
    .slice(0, len);
  res.json(results);
});

module.exports = app;
