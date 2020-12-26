const express = require("express");

const books = require("./books.json");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/book-list", function (req, res) {
  res.json(books);
});

app.listen(3000, () => {
  console.log("Sever is runing at http://localhost:3000");
});
