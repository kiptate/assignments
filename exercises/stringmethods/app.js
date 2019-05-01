function myFunc(){
    let str = "Hello"
    let caps = str.toUpperCase()
    let low = str.toLowerCase()
    return caps + low
}
console.log(myFunc())

function myFunc2(){
    let str = "Hello"
    let x = str.length
    let y = x / 2
    return Math.floor(y)
}
console.log(myFunc2())

function myFunc3(){
    let str = "Hello"
    let ind = str.slice(0,2)
    return ind
}
console.log(myFunc3())

function myFunc4(){
    let str = "Hello World"
    let ind = str.slice(0,5)
    return ind
}
console.log(myFunc4())

function myFunc5(){
    let str = "He"
    let str2 = "llo"
    let caps = str.toUpperCase()
    let low = str2.toLowerCase()
    return caps + low
}
console.log(myFunc5())

function myFunc6(){
    let str = "Hello world"
    let half = str.slice(0,5)
    let half2 = str.slice(5,11)
    let low = half2.toLowerCase()
    let cap = half.toUpperCase()
    return cap + low
    
}
console.log(myFunc6())