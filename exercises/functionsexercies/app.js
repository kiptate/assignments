function myFunc(one, two) {
    var one = 2;
    var two = 4;

    return (one + two)
}
console.log(myFunc())

function myFunc2(one, two, three) {
    // var one = 3;
    // var two = 7;
    // var three = 10;

    return Math.max(one, two, three)
}
console.log(myFunc2(22, 100, 432))

function myFunc3(one){
    if (one % 2 === 0){
        return `${one} is even`
    }else {
        return `${one} is odd`
    }
}
console.log(myFunc3(23))

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

function myFunc4(str){

    str = "speghetti is life and death"

    if (str.length <= 20){
        return str + str
    }else{
        return str.slice(0), str.length / 2
    }
}
console.log(myFunc4())