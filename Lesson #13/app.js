const express = require("express");
const app = express();

// in general you don't want to leak system errors
app.get("/foo", (req, res, next) => {
  return res.set("Cookie", "foo=1").end();
});

app.get("/foobar", (req, res, next) => {
  return res.set("Cookie", "foo=1;bar=1").end();
});

app.get("/increment", (req, res, next) => {
  const foo = parseInt(req.get("Cookie").split("=")[1]);
  return res.set("Cookie", `foo=${foo + 1}`).end();
});

module.exports = app;
