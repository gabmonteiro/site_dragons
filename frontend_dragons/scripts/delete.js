function sendId() {
    //pegando valor do ID
    let id = document.getElementById("id").value;

    //enviando form em JSON pro backend por HTTP POST
    fetch("https://api-dragons-production.up.railway.app/dragons/"+id, {
        method: 'DELETE'})
        .then(alert("deletado"))
}