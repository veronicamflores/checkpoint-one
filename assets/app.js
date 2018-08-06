let target = {
    name:'Harley Quinn',
    health: 100,
    hits: 0,
    item: [],
    targetImg: ['assets/IMG-0111.PNG', 'assets/IMG-0115.PNG', 'assets/IMG-0116.PNG', 'assets/IMG-0117.PNG']
}

let items = {
    water: { name: 'Helping Hand', modifier: 2, description: 'its a slap' },
    sun: { name: 'Photosynthesis', modifier: 7, description: 'its a punch' },
    pesticide: {name: 'Opposite of Helping', modifier: -5, description: 'its a kick'},
    glitter: { name: 'Helping Hand', modifier: 1, description: 'its a slap' },
    explosives: { name: 'Photosynthesis', modifier: 10, description: 'its a punch' },
    pies: {name: 'Opposite of Helping', modifier: -6, description: 'its a kick'}
}

let user = {
    name: 'Posion Ivy',
    health:100,
    hits: 0,
    item: [],
    userImg: ['assets/IMG-0107.PNG', 'assets/IMG-0108.PNG', 'assets/IMG-0109.PNG', 'assets/IMG-0110.PNG']
}

const userImg = document.getElementById('posion-ivy')
const userName = document.getElementById('user')
const targetImg = document.getElementById('harley-quinn')
const targetName = document.getElementById('target')

function getWater(){
    target.item.push(items.water)
    addMods(target)
}
function getSun(){
    target.item.push(items.sun)
    addMods(target)
}
function getPesticide(){
    target.item.push(items.pesticide)
    addMods(target)
}
function getGlitter(){
    user.item.push(items.glitter)
    addMods(user)
}
function getExplosives(){
    user.item.push(items.explosives)
    addMods(user)
}
function getPies(){
    user.item.push(items.pies)
    addMods(user)
}

function addMods(obj){
    let totalMods = 0
    for(let i = 0; i < obj.item.length; i++){
        let choice = obj.item[i]
        totalMods += choice.modifier
    }
    return totalMods
}
function empty(){
    targetReturn = target.item.length = 0
    userReturn = user.item.length = 0

    return targetReturn, userReturn
}

function vines() {
    target.health -= 1 + addMods(target)
    target.hits++;
    userImg.setAttribute('src', user.userImg[1])
    upDate();
    draw()
}
function posion() {
    target.health -= 5 + addMods(target)
    target.hits++;
    userImg.setAttribute('src', user.userImg[2])
    upDate();
    draw()
}
function pheromone() {
    target.health -= 10 + addMods(target)
    target.hits++;
    userImg.setAttribute('src', user.userImg[3])
    upDate();
    draw()
}
function confetti() {
    user.health -= 1 +addMods(user)
    user.hits++;
    targetImg.setAttribute('src', target.targetImg[1])
    upDate();
    draw()
}
function bat() {
    user.health -= 5 + addMods(user)
    user.hits++;
    targetImg.setAttribute('src', target.targetImg[3])
    upDate();
    draw()
}
function hammer() {
    user.health -= 10 + addMods(user)
    user.hits++;
    targetImg.setAttribute('src', target.targetImg[2])  
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
        targetImg.setAttribute('src', target.targetImg[0])
    }
    else if(user.health <= 0){
        alert( `${target.name} Wins!`)
        user.health = 100
        user.hits = 0
        target.health = 100
        target.hits = 0
        targetImg.setAttribute('src', target.targetImg[0])
        userImg.setAttribute('src', user.userImg[0])
    }  
    document.getElementById('health').innerText = target.health;
    document.getElementById('hits').innerText = target.hits;
    document.getElementById('user-health').innerText = user.health;
    document.getElementById('user-hits').innerText = user.hits;
    empty()

}
function draw() {
    userName.innerText = user.name
    targetName.innerText = target.name
}

function reset(){
    user.health = 100
    user.hits = 0
    target.health = 100
    target.hits = 0
    targetImg.setAttribute('src', target.targetImg[0])
    userImg.setAttribute('src', user.userImg[0])
    upDate()
}

draw()
upDate();
