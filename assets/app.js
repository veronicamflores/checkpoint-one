let target = {
    health: 100,
    hits: 0,
    items: []
}

let letItems = {
    fire:{name: 'Fire Hands', modifier: 2, description: 'its a slap'},
    water: {name: 'Water Waves', modifier: 5, description: 'its a punch'},
    lava: {name: 'Lava You Pretty Dead', modifier: 10, description: 'its a kick'
    }
}

// function getFire(){
//     target.items.push(letItems.fire);
//     addMods()
// }
// function getWater(){
//  target.items.push(letItems.water);
//  addMods()
// }
// function getLava(){
//  target.items.push(letItems.lava);
//  addMods()
// }
// function addMods(arr, obj){
//     let total = 0;
//     for (let i = 0; i < arr.items.length; i++) {
//         let item = arr.items[i]
//         total += item[i][modifier]
//     }
//     return total
// }


function slap(){
    target.health -= 1
    
    target.hits++;
    upDate();
}
function punch(){
    target.health -= 5
    target.hits++;
    upDate();
}
function kick(){
    target.health -= 10
    target.hits++;
    upDate();
}


function upDate(){
    if(target.health <= 0){
        alert("You Win")
        target.health = 100
        target.hits = 0
    }
    document.getElementById('health').innerText = target.health;
    document.getElementById('hits').innerText = target.hits;
    
}

upDate();
