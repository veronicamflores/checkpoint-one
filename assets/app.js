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

function getItem(mod){
    if(mod == 'fire'){
        target.items.push(items.fire);
    }else if(mod == 'water'){
        target.items.push(items.water);
    }else{
        target.items.push(items.lava);    } 
}

function slap(){
    target.health -= (1 + addMods())
    target.hits++;
    upDate();
}
function punch(){
    target.health -= (5 + addMods())
    target.hits++;
    upDate();
}
function kick(){
    target.health -= (10 + addMods())
    target.hits++;
    upDate();
}

function addMods(){
    let total = 0;
    for (let i = 0; i < target.items.length; i++) {
        let item = target.items[i]
        total += item[i].modifier
    }
    return total
}
function upDate(){
    document.getElementById('health').innerText = target.health;
    document.getElementById('hits').innerText = target.hits;
}



upDate();
