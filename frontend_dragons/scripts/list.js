window.onload = getDragons;

function getDragons() {
    //http get all dragons
    var http = new XMLHttpRequest();
    http.open("GET", "https://api-dragons-production.up.railway.app/receivedragon");
    http.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    http.send(null);
    http.onreadystatechange = () => {
            let response = http.response;
            console.table(response);
            let lista = "";
            response.forEach(element => {
                lista += `<p>Nome: ${element.nome} Tipo: ${element.tipo}</p>`
            });
            document.querySelector("#list").innerHTML += lista;
        };
}