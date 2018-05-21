const express = require("express");
const app = express();

const users = {
  bob: {
    name: "Bob"
  },
  anna: {
    name: "Anna"
  }
};

app.get("/users", (req, res) => {
  res.json(Object.values(users));
});

app.get("/users/:id", (req, res) => {
  if (req.query.name) {
    res.json({ username: users[req.params.id].name });
  } else {
    res.json(users[req.params.id]);
  }
});

// this will never be called because line 17 has the same
// url pattern as this
app.get("/users/:someOtherVariable", (req, res) => {
  res.json(users[req.params.someOtherVariable]);
});

// this is called because it has a different url pattern
app.get("/users/:id/:someOtherVariable", (req, res) => {
  const user = users[req.params.id];
  const user2 = users[req.params.someOtherVariable];

  if (req.query.foo) {
    res.json([user2, user]);
  } else {
    res.json([user, user2]);
  }
});

// url variables can be added anywhere in the path
app.get("/users/:id/:someOtherVariable/names", (req, res) => {
  const user = users[req.params.id];
  const user2 = users[req.params.someOtherVariable];

  res.json([user.name, user2.name]);
});

module.exports = app;
