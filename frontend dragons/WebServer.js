const express = require("express");
const app = express();

app.listen(4040, () => {
  console.log("Application started and Listening on port 4040");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});

app.get("/index.css", (req, res) => {
  res.sendFile(__dirname + "/pages/index.css");
});
