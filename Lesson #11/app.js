const express = require("express");
const app = express();

// you need to call next if you want to go to the next step
const myFooMiddleware = (req, res, next) => {
  if (!req.query.foo) return next();

  return res.json({ foo: parseInt(req.query.foo) + 1 });
};

// a middleware is just a function that runs before the action handler
app.get("/", myFooMiddleware, (req, res) => {
  res.json({ foo: 1 });
});

const isAdmin = (req, res, next) => {
  const isAdmin = req.get("X-admin");
  if (!isAdmin) return res.json({ message: "You are not an admin" });

  return next();
};

const hasValidToken = (req, res, next) => {
  if (!req.query.token) return res.json({ message: "No token" });

  return next();
};

// middleware are very useful for doing things that needs to happen
// before you hit a action handler
app.delete("/users/:id", hasValidToken, isAdmin, (req, res) => {
  res.json({ message: "Bob was removed" });
});

const isLoggedIn = (req, res, next) => {
  // in a real application we would use a session or a token
  if (!req.get("Authentication")) return res.redirect("/login");

  return next();
};

app.get("/welcome", isLoggedIn, (req, res) => {
  res.json({ message: "welcome" });
});

module.exports = app;
