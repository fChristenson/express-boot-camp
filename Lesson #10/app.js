const express = require("express");
const app = express();

app.set("views", __dirname);
app.set("view engine", "ejs");

// rendering is just the process of take data and putting
// it inside a string, this can be done with any text not just html
app.get("/", (req, res) => {
  res.end(`foo: ${req.query.foo}`);
});

// html is just a text format of tags that the browser can understand
// and with it we can build webpages
app.get("/html", (req, res) => {
  res.render("./index", { foo: req.query.foo });
});

module.exports = app;
