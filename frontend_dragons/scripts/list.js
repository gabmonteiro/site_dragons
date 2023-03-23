function getDragons() {
  fetch("https://api-dragons-production.up.railway.app/dragons").then(
    async function (response) {
      var listaJson = await response.json();
      console.log(listaJson);
      let nomes = "";
      let contagem=0;
      listaJson.forEach((element) => {
        nomes += `<p><strong>${element.id} Nome:</strong> ${element.nome} <br> <strong>Tipo:</strong> ${element.tipo}</p>`;
        contagem++;
      });
      document.querySelector("#info").innerHTML += nomes;
    }
  );
}

getDragons();
