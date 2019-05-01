if (5 > 3) {
    console.log('is greater than')
}

if ('cat'.length === 3) {
    console.log('is the length')
}

if ('cat' === 'dog') {
    console.log('is equal')
}else {
    console.log('not the same')
}

var person = {
    name: "Bobby",
    age: 12
}

if (person.age >= 18) {
    console.log('is allowed to go to the movie')
}else (person.age < 18)
    console.log('not allowed to go to the movie')

if (person.name[0] === 'B') {
    console.log('is allowed to go to the movie')
} else {
    console.log('is not allowed to go to the movie')
}

if (person.name[0] === 'B') {
    console.log('is allowed to go to the movie')
}else if (person.age >= 18)  {
    console.log('is allowed to go to the movie')
}else (person.age < 18)
    console.log('is not allowed to go to the movie')