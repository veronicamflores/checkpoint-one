let health = 100;

function slap(){

    health = health - 1;
    alert(health);
    upDate();
}
function punch(){

    health = health - 5;
    alert(health);
    upDate();
}
function kick(){

    health = health - 10;
    alert(health);
    upDate();
}

function upDate(){
    document.getElementById('health').innerText = health;
}

upDate();