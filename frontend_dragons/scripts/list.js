function getDragons() {
  fetch("https://api-dragons-production.up.railway.app/receivedragon").then(
    async function (response) {
      var listaJson = await response.json();
      console.log(listaJson);
      let lista = "";
      listaJson.forEach((element) => {
        lista += `<p><strong>Nome:</strong> ${element.nome} <strong>Tipo:</strong> ${element.tipo}</p>`;
      });
      document.querySelector("#info").innerHTML += lista;
    }
  );
}

getDragons();
