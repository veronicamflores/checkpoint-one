let target = {
    health: 100,
    hits: 0,
    items: [],
    targetImg: ['assets/IMG-0111.PNG', 'assets/IMG-0112.PNG', 'assets/IMG-0114.PNG', 'assets/IMG-0113.PNG']
}

let letItems = {
    water: { name: 'Helping Hand', modifier: -2, description: 'its a slap' },
    sun: { name: 'Photosynthesis', modifier: -7, description: 'its a punch' },
    pesticide: {
        name: 'Opposite of Helping', modifier: 5, description: 'its a kick'
    }
}

let user = {
    name: 'Posion Ivy',
    items: [],
    userImg: ['assets/IMG-0107.PNG', 'assets/IMG-0108.PNG', 'assets/IMG-0109.PNG', 'assets/IMG-0110.PNG']
}

const userImg = document.getElementById('posion-ivy')
const userName = document.getElementById('user')
const targetImg = document.getElementById('harley-quinn')
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


function vines() {
    target.health -= 1
    target.hits++;
    userImg.setAttribute('src', user.userImg[1])
    upDate();
    draw()
}
function posion() {
    target.health -= 5
    target.hits++;
    userImg.setAttribute('src', user.userImg[2])
    upDate();
    draw()
}
function pheromone() {
    target.health -= 10
    target.hits++;
    userImg.setAttribute('src', user.userImg[3])
    upDate();
    draw()
}

function upDate() {
    if (target.health <= 0) {
        alert("You Win")
        target.health = 100
        target.hits = 0
        userImg.setAttribute('src', user.userImg[0])
    }
    document.getElementById('health').innerText = target.health;
    document.getElementById('hits').innerText = target.hits;
    if (target.health >= 75) {
        targetImg.setAttribute('src', target.targetImg[0])
    } else if (target.health >= 50) {
        targetImg.setAttribute('src', target.targetImg[1])
    } else if (target.health >= 25) {
        targetImg.setAttribute('src', target.targetImg[2])
    } else if (target.health >= 5) {
        targetImg.setAttribute('src', target.targetImg[3])
    }
}
function draw() {
    userName.innerText = user.name

}
function targetImage() {

}

draw()
upDate();
