let target = {
    health: 100,
    hits: 0,
}
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


// let items = {
//     slap:{name: 'slap', modifier: 1, description: 'its a slap'},
//     punch: {name: 'punch', modifier: 5, description: 'its a punch'},
//     kick: {name: 'slap', modifier: 10, description: 'its a kick'
//     }
// }