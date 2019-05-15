const ask = require('readline-sync')

console.log('\nWelcome to my twisted world.... Gamers RISE UP!\n')

let username = ask.question('What is your name gamer? \n')

function User (name){
    this.name = name
    this.hp = 100
    this.theHp = 300
    this.inventory = ['Prank Flower']
    this.isAlive = true
    this.hasWon = false
    this.attack = function(){
        return Math.floor(Math.random()* 12) + 3
    }
}

let gamer = new User(username)
console.log(gamer)

function Enemy (name, hp, num){
    this.name = name
    this.startingHp = hp
    this.hp = hp
    this.attack = function(){
        return Math.floor(Math.random()* num) + 3
    }
}

const chad = new Enemy('Chad', 80, 25)
const veronica = new Enemy('Veronica', 300, 8)
const drumft = new Enemy('Drumft', 25, 55)
const christian = new Enemy('Christian Bale', 40, 11)

const enemies = [chad, veronica, drumft, christian]


while(!gamer.hasWon && gamer.isAlive){
    let command = ask.keyIn('We live in a society Press [W] to explore and see how mad men are made. Press [B] to open your backpack. Press [Q] to leave this society and not RISE UP! ', {limit: 'pwbq'}) 
    if(command === 'p'){
        console.log(gamer)
    }else if(command === 'w'){
        walk()
    }else if (command === 'b'){
        openBackpack()
    }else {
        gamer.isAlive = false
        console.log(`\nYou did not RISE UP! You've disappeared into the Matrix, Goodbye ${gamer.name}..\n`)
    }
}

function walk(){
    let random = Math.floor(Math.random()*3)+ 1
    if(random < 3){
        console.log("You're now walking through a twisted society... \n")
    }else{
        enemyEncounter()
    }
}

function openBackpack(){
    console.log(`\nYour backpack is holding ${gamer.inventory}\n`)
}

function enemyEncounter(){
    let enemy = enemies[Math.floor(Math.random()*enemies.length)]
    let command = ask.keyIn(`\n${enemy.name} has blocked your path... Press [R] to RISE UP against ${enemy.name}!!! Press [F] to flee... `, {limit: 'rf'})
    if(command === 'f'){
        flee(enemy)
    }else{
        while(enemy.hp > 0 && gamer.hp > 0){
            shlonk(enemy)
        }if(gamer.hp <= 0){
            deathMessage(enemy)
        }else if(enemy.hp <= 0){
            addHp(gamer)
            addItem(gamer)
            console.log("\nYou've are now at 300 HP! & recieved a Potato Peeler!\n")
        }
    }
}

function flee(enemy){
    let random = Math.floor(Math.random()*2)+1
    if(random < 2){
        console.log(`${gamer.name} has fled!`)
    }else{
        while(enemy.hp > 0 && gamer.hp > 0){
            shlonk(enemy)
        }if(gamer.hp < 0){
            deathMessage(enemy)
        }else if(enemy.hp < 0){
            addHp(gamer)
            addItem(gamer)
            console.log("\nYou've are now at 300 HP! & received a Potato Peeler!\n")
        }
    }
}

function shlonk(enemy){
    let random = Math.floor(Math.random()*4)+1
    if(random === 1){
        console.log(`${enemy.name} avoided the attack! Try again ${gamer.name} `)
    }else{
        enemy.hp -= gamer.attack()
        gamer.hp -= enemy.attack()
        console.log (`\n${enemy.name} shlonked ${gamer.name}!! \n${gamer.name}'s HP is at ${gamer.hp}\n${gamer.name} yeeted ${enemy.name}\n${enemy.name}'s HP is at ${enemy.hp} \n`)
    }
}

function deathMessage(enemy){
    // gamer.isAlive = false
    let command = ask.keyIn(`${enemy.name} killed you... You did not RISE UP... Press [Y] to restart game or [Q] to quit. \n`, {limit: 'yq'})
    if(command === 'y'){
        enemy.hp = enemy.startingHp
        console.log('\nWelcome to my Twisted World.... Gamers RISE UP!\n')
        let username = ask.question('What is your name gamer? \n')
        gamer = new User(username)
        console.log(gamer)
        !gamer.hasWon && gamer.isAlive
    }else{
        gamer.isAlive = false
        console.log(`\nYou did not RISE UP! You've disappeared into the Matrix, Goodbye ${gamer.name}..\n`)
    }
}

function addHp(gamer){
    gamer.hp = gamer.theHp
}

function addItem(gamer){
    gamer.inventory.push('Potato Peeler')
}
