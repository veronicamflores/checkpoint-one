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
function getFire(){
    target.items.push(items.fire)
}
function getWater(){
    target.items.push(items.water)
}
function getLava(){
    target.items.push(items.lava)
}

function damage(attack){
    if(attack == 'slap'){
        target.health = target.health - 1;
    }else if(attack == 'punch'){
        target.health = target.health - 5;
    }else if(attack == 'kick'){
    target.health = target.health - 10;
    }
    target.hits++;
    upDate();
}
function punch(){

   
    target.hits++;
    upDate();
}
function kick(){

   
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
