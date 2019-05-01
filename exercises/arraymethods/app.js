const fruit = ["banana", "apple", "orange", "watermelon"];
const vegetables = ["carrot", "tomato", "pepper", "lettuce"];

const returnedArr = vegetables.pop()

// console.log(vegetables)
// console.log(returnedArr)

const returnedFr = fruit.shift()

// console.log(fruit)
// console.log(returnedFr)

const returnedFr1 = fruit.indexOf("orange")

// console.log(fruit)
// console.log(returnedFr1)

const returnedFr2 = fruit.push(1)

// console.log(fruit)
// console.log(returnedFr2)

const returnedArr1 = vegetables.length

// console.log(vegetables)
// console.log(returnedArr1)

const returnedArr2 = vegetables.push(3)

// console.log(vegetables)
// console.log(returnedArr2)

const food = fruit.concat(vegetables)

// console.log(food)

food.splice(4,2)

// console.log(food)

food.reverse()

// console.log(food)

const food1 = food.join(' ')

console.log(food1)
