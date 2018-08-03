let target = {
    health: 100,
    hits: 0,
    items: []
}

let items = {
    fire:{name: 'Fire Hands', modifier: 2, description: 'its a slap'},
    water: {name: 'Water Waves', modifier: 10, description: 'its a punch'},
    lava: {name: 'Lava You Pretty Dead', modifier: 20, description: 'its a kick'
    }
}
function giveItems(){
    target['items'].push(items)
}

giveItems();

function slap(){
    target.health = target.health - 1;
    target.hits++;
    upDate();
}
function punch(){

    target.health = target.health - 5;
    target.hits++;
    upDate();
}
function kick(){

    target.health = target.health - 10;
    target.hits++;
    upDate();
}

function upDate(){
    document.getElementById('health').innerText = target.health;
    document.getElementById('hits').innerText = target.hits;
}

function addMods(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[1].modifier
    }
    return total
}

upDate();
