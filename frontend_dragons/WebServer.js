const express = require("express");
const app = express();

app.listen(4040, () => {
  console.log("Aplicação iniciada e ouvindo na porta 4040 :)");
});

//paginas html
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/pages/register.html");
});

app.get("/list", (req, res) => {
  res.sendFile(__dirname + "/pages/list.html");
});

//stylesheets
app.get("/index.css", (req, res) => {
  res.sendFile(__dirname + "/pages/register.css");
});

//scripts
app.get("/scripts/register.js", (req, res) => {
  res.sendFile(__dirname + "/scripts/register.js");
});

app.get("/scripts/list.js", (req, res) => {
  res.sendFile(__dirname + "/scripts/list.js");
});