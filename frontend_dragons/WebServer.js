const express = require("express");
const app = express();

app.listen(4040, () => {
  console.log("Aplicação iniciada e ouvindo na porta 4040 :)");
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

//paginas html
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/pages/register.html");
  console.log("Carregando página...");
});

app.get("/list", (req, res) => {
  res.sendFile(__dirname + "/pages/list.html");
  console.log("Carregando página...");
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