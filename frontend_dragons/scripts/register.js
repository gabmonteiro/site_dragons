function Submit() {
    let nome = document.getElementById("nome");
    let tipo = document.getElementById("tipo");
    let dragon = {
        nome: nome,
        tipo: tipo
    };

    fetch('http://localhost:8080/newdragon', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({dragon})
    })

    console.log(dragon);
}