// let skateKid = {
//     name: 'Rick',
//     age: 81,

// }

const skateBoarder = {
    deckType: ['small', 'medium', 'large'],
    wheelType: ['slow', 'average', 'fast'],
    price: 40,
    accessory: [],
    isBroken: false,
    goodBoard: function(){
        this.isBroken = true
    }
}

function addProp(prop, val, skateBoarder){
    skateBoarder[prop] = val
    return skateBoarder
}
skateBoarder.deckType.push('phat')
const newSkateBoarder = addProp('kickflip', true, skateBoarder)

console.log(newSkateBoarder)