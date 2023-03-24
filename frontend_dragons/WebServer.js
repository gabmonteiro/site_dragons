const express = require("express");
const cors = require('cors');
const app = express();

app.listen(process.env.PORT || 4040);

app.use(cors({
    origin: 'https://www.section.io'
}));

app.get("/", function (req, res) {
  res.send("Hellooo");
})




//paginas html
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/pages/register.html");
  console.log("Carregando página register");
});

app.get("/list", (req, res) => {
  res.sendFile(__dirname + "/pages/list.html");
  console.log("Carregando página list");
});

app.get("/delete", (req, res) => {
  res.sendFile(__dirname + "/pages/delete.html");
  console.log("Carregando página delete");
});

app.get("/update", (req, res) => {
  res.sendFile(__dirname + "/pages/update.html");
  console.log("Carregando página update");
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

app.get("/scripts/delete.js", (req, res) => {
  res.sendFile(__dirname + "/scripts/delete.js");
});

app.get("/scripts/update.js", (req, res) => {
  res.sendFile(__dirname + "/scripts/update.js");
});