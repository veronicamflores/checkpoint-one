let target = {
    name:'Harley Quinn',
    health: 100,
    hits: 0,
    items: [],
    targetImg: ['assets/IMG-0111.PNG', 'assets/IMG-0112.PNG', 'assets/IMG-0114.PNG', 'assets/IMG-0113.PNG']
}

let letItems = {
    water: { name: 'Helping Hand', modifier: -2, description: 'its a slap' },
    sun: { name: 'Photosynthesis', modifier: -7, description: 'its a punch' },
    pesticide: {name: 'Opposite of Helping', modifier: 5, description: 'its a kick'},
    glitter: { name: 'Helping Hand', modifier: -1, description: 'its a slap' },
    explosives: { name: 'Photosynthesis', modifier: -10, description: 'its a punch' },
    pies: {name: 'Opposite of Helping', modifier: 6, description: 'its a kick'}
}

let user = {
    name: 'Posion Ivy',
    health:100,
    hits: 0,
    items: [],
    userImg: ['assets/IMG-0107.PNG', 'assets/IMG-0108.PNG', 'assets/IMG-0109.PNG', 'assets/IMG-0110.PNG']
}

const userImg = document.getElementById('posion-ivy')
const userName = document.getElementById('user')
const targetImg = document.getElementById('harley-quinn')
const targetName = document.getElementById('target')

function (){
    
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
function confetti() {
    user.health -= 1
    user.hits++;
    targetImg.setAttribute('src', target.targetImg[0])
    upDate();
    draw()
}
function bat() {
    user.health -= 5
    user.hits++;
    targetImg.setAttribute('src', target.targetImg[0])
    upDate();
    draw()
}
function hammer() {
    user.health -= 10
    user.hits++;
    targetImg.setAttribute('src', target.targetImg[0])
    upDate();
    draw()
}

function upDate() {
    if (target.health <= 0) {
        alert( `${user.name} Wins!`)
        target.health = 100
        target.hits = 0
        user.health = 100
        user.hits = 0
        userImg.setAttribute('src', user.userImg[0])
    }
    else if(user.health <= 0){
        alert( `${target.name} Wins!`)
        user.health = 100
        user.hits = 0
        target.health = 100
        target.hits = 0
        targetImg.setAttribute('src', target.targetImg[0])
    }  
    document.getElementById('health').innerText = target.health;
    document.getElementById('hits').innerText = target.hits;
    document.getElementById('user-health').innerText = user.health;
    document.getElementById('user-hits').innerText = user.hits;

}
function draw() {
    userName.innerText = user.name
    targetName.innerText = target.name
}



draw()
upDate();
