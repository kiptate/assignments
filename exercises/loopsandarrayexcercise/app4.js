// Nesting

var person = {
    name: 'Johnny',
    age: 93,
    hobbies: [{
        name: "Kite Boarding",
        gear: ["Kite", "Board", "Wind"],
    },{
        name: "Bird Watching",
        gear: ["Binoculars", "Patience", "Eyesight", "Bird Guide", "Bird Person", "Shotgun"],
    },{
        name: "Backpacking",
        gear: ["Backpack backpack"],
    }]
}

console.log(person.hobbies[1])

// a key is in a object it is the name:  <<--- in Johnny up there. and the VALUE is the String, Function, Array, etc.

// String Methods (EVERYTIME YOU DO A STRING METHOD YOU MUST SAVE IT AS A VAR FIRST)

// .indexOf(str to find, starting point in str)


// .split()

const mystr = "get yeeted on motha fucka"

const newArr = mystr.split(' ')

console.log(newArr)

// .slice()

const str = 'I am sorry for my mistake'

let newStr = str.slice(0,1)

console.log(newStr)

//

//Constructor Function