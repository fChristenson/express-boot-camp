const express = require("express");
const app = express();

// in general you don't want to leak system errors
app.get("/", (req, res, next) => {
  if (req.query.bar) return next(new Error("Bar is not ok"));
  if (req.query.baz) return next(new Error("Baz is not ok"));
  if (req.query.foobar) return next(new Error("wtf is going on"));

  return res.json({ foo: 1 });
});

app.use((error, req, res, next) => {
  if (/Bar is not ok/.test(error.message))
    return res.status(400).json({ error: error.message });

  return next(error);
});

app.use((error, req, res, next) => {
  if (/Baz is not ok/.test(error.message))
    return res.status(400).json({ error: error.message });

  return next(error);
});

app.use((error, req, res, next) => {
  res.status(500).json({ error: error.message });
});

module.exports = app;
