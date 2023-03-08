window.onload = getDragons;

function getDragons() {
    //http get all dragons
    var http = new XMLHttpRequest();
    http.open("GET", "https://api-dragons-production.up.railway.app/receivedragon");
    http.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    http.send(null);
    http.onreadystatechange = () => {
            let list = http.responseText;
            console.log(list);
        };
    formatList(list);
    //insert tag on html   
}

function formatList(jsonNotString) {
    var stringJson = JSON.parse("\'"+jsonNotString+"\'");
    console.log(stringJson);
}