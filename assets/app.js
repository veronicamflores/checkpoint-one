let target = {
    health: 100,
    hits: 0,
    items: []
}

let items = {
    fire:{name: 'Fire Hands', modifier: 2, description: 'its a slap'},
    water: {name: 'Water Waves', modifier: 5, description: 'its a punch'},
    lava: {name: 'Lava You Pretty Dead', modifier: 10, description: 'its a kick'
    }
}
function addMods(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[1].modifier
    }
    return total
}
function getItem(mod){
    if(mod == 'fire'){
        target.items.push(items.fire);
    }else if(mod == 'water'){
        target.items.push(items.water);
    }else{
        target.items.push(items.lava);    } 
}

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



upDate();
