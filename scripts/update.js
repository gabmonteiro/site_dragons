//Pegando valor do parâmetro na URL
const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
console.log(id);

//Pegando dragon e setando nas tags inputs
fetch(`https://api-dragons-production.up.railway.app/dragons/${id}`).then(
  async function (response) {
    let dragon = await response.json();
    document.querySelector("#nome").value = dragon.nome;
    document.querySelector("#tipo").value = dragon.tipo;
  }
);

function sendUpJson() {
  //transformando form em JSON
  let nome = document.getElementById("nome").value;
  let tipo = document.getElementById("tipo").value;

  object = { nome, tipo };

  formJson = JSON.stringify(object);
  console.log(formJson);

  var http = new XMLHttpRequest();
  http.open(
    "PUT",
    `https://api-dragons-production.up.railway.app/dragons/${id}`
  );
  http.setRequestHeader("Content-type", "application/json;charset=UTF-8");
  http.send(formJson);

  alert("Enviado");

  window.location.replace(`/list`);
}
