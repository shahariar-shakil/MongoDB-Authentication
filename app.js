const express = require("express");
const cors = require("cors");
const ejs = require("ejs");
const { get } = require("http");
const app = express();

app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// base url
app.get("/", (req, res) => {
  res.render("index");
});

module.exports = app;
