function sendJson() {
    //transformando form em JSON
    let nome = document.getElementById("nome").value;
    let tipo = document.getElementById("tipo").value;
    
    object = {nome, tipo}

    let formJson = JSON.stringify(object);
    console.log(formJson);

    //enviando form em JSON pro backend por HTTP POST
    var http = new XMLHttpRequest();
    http.open("POST", "https://api-dragons-production.up.railway.app/newdragon");
    http.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    http.send(formJson);

    alert("Enviado");
}
