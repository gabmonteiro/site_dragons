const express = require("express");
const app = express();

app.listen(4040, () => {
  console.log("Aplicação iniciada e ouvindo na porta 4040 :)");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/pages/register.html");
});

app.get("/index.css", (req, res) => {
  res.sendFile(__dirname + "/pages/register.css");
});
