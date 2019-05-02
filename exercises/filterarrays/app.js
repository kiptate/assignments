function isGreaterthanfive(num) {
    return num >= 5;
}
const filtered = [3, 6, 8, 2].filter(isGreaterthanfive);
console.log(filtered);

function evensOnly(num){
    return num % 2 === 0
}
const evenNumbers = [3, 6, 8, 2].filter(evensOnly)
console.log(evenNumbers)

function fiveCharactersOrFewerOnly(arr) {
    return arr[1]
  }
  test

const fewerChar = ["dog", "wolf", "by", "family", "eaten", "camping"]
const newArr = fewerChar.filter(str => str.length <= 5);
console.log(newArr)
 ["by", "dog", "wolf", "eaten"]

const peopleWhoBelongToTheIlluminati = [
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]

const newArr = peopleWhoBelongToTheIlluminati.filter(str => str.member === true)
console.log(newArr)

const ofAge = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const newAge = ofAge.filter(str => str.age > 18)

console.log(newAge)

  