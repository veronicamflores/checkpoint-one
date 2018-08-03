let health = 100;
let hits = 0;
function slap(){
    health = health - 1;
    hits++;
    upDate();
}
function punch(){

    health = health - 5;
    hits++;
    upDate();
}
function kick(){

    health = health - 10;
    hits++;
    upDate();
}

function upDate(){
    document.getElementById('health').innerText = health;
    document.getElementById('hits').innerText = hits;
}

upDate();