import { Express } from "express";
const express = require("express");
const app = express();

app.listen(process.env.PORT || 3000);

app.get("/", function (req, res) {
  res.send("Hellooo");
})


/*

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

*/