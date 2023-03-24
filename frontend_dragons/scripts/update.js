const { json } = require("express");

const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
console.log(id);

function sendUpJson() {
  //transformando form em JSON
  let nome = document.getElementById("nome").value;
  let tipo = document.getElementById("tipo").value;

  object = { nome, tipo, id };

  JSON.stringify(formJson);
  console.log(formJson);

  fetch(url, {
    method: "PUT",
    body: formJson,
  })
    .then((response) => console.log(response))
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  alert("Enviado");
}
