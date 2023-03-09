function getDragons() {
  fetch("https://api-dragons-production.up.railway.app/receivedragon").then(
    async function (response) {
      var listaJson = await response.json();
      console.log(listaJson);
      let lista = "";
      listaJson.forEach((element) => {
        lista += `<p>Nome: ${element.nome} Tipo: ${element.tipo}</p>`;
      });
      document.querySelector("#list").innerHTML += lista;
    }
  );
}

getDragons();
