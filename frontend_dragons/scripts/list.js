function getDragons() {
  //fazedno http get e ordenando array de objetos
  fetch("https://api-dragons-production.up.railway.app/dragons").then(
    async function (response) {
      var listaJson = await response.json();
      console.log(listaJson);
      listaJson.sort(function(a, b) {
        if(a.id < b.id) {
          return -1;
        } else {
          return true;
        }
      })

      //colocando irformações no html
      let nomes = "";
      let contagem=0;
      listaJson.forEach((element) => {
        nomes += `<tr><td>${element.id}</td><td>${element.nome}</td><td>${element.tipo}</td><td><input type="button" value="Del" id="deleteButton" onclick="sendIdToDelete(${element.id})"></input></td></tr>`;
        contagem++;
      });
      document.querySelector("#tabela").innerHTML += nomes;
    }
  );
}
getDragons();


function sendIdToDelete(id) {
  //enviando form em JSON pro backend por HTTP POST
  fetch("https://api-dragons-production.up.railway.app/dragons/"+id, {
      method: 'DELETE'})
      .then(
        alert("deletado"),
        window.location.reload(true)
      )
}


