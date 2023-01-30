window.onload = getDragons;

function getDragons() {
    //http get all dragons
    var http = new XMLHttpRequest();
    http.open("GET", "http://localhost:8080/receivedragon");
    http.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    http.send(null);
    http.onreadystatechange = () => {
            let list = http.responseText;
            console.log(list);
        };

    //insert tag on html
    
}