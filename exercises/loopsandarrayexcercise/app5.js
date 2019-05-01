//push -- add items to the END of your array

// modifies original array
// returns length of new array

// const arr = [1,2,3,4]

// let returnedArr = arr.push(5)

// console.log(arr)
// console.log(returnedArr)

//pop --- Removed last item in an array.

// modifies original array
// returns item that got removed

// const arr = [1,2,3,4]

// const returnedArr = arr.pop()

// console.log(arr)
// console.log(returnedArr)

//shift oppisite of pop

// const arr = [1,2,3,4,4,5,6,5]

// const returnedArr = arr.shift()

// console.log(arr)
// console.log(returnedArr)


//unshift --- ADDING NEW ITEMS TO BEGINNING OF THE ARRAY

// modiefies the original array
// length of the new array

// const arr = ['end', 'middle', 'what??']

// const returnedArr = arr.unshift('beginning')

// console.log(arr)
// console.log(returnedArr)

//splice (startingIndex, NumberofItemsToRemove, Items to add) -- allows to add or remove items from a specified location in an array

// DOES modify original array

// const arr = ['dog', 'cat', 'mouse', 'rat']

// const returnedArr = arr.splice(1, 3)

// console.log(arr)
// console.log(returnedArr)


//slice(starting point first, endingpoint) -- grabs items from an array

// does not modify original array
// returns the items that you sliced

// const arr = [1,2,3,4,4,5,6,5]

// const returnedArr = arr.slice(3,5)

// console.log(arr)
// console.log(returnedArr)

//indexOf(item you want to find the index of, startingIndex) --- finds the index of a specified item

// const arr = [1,2,3,4,4,5,6,5]

// const returnedArr = arr.indexOf(5)

// console.log(arr)
// console.log(returnedArr)

//lastIndexOf -- finds the last occurring index

// const arr = [1,2,3,4,4,5,6,5]

// const returnedArr = arr.lastIndexOf(5)

// console.log(arr)
// console.log(returnedArr)

//join (seperator) similar to split but with arrays not strings

// const arr = ['I', 'am', 'a', 'real', 'boy']

// const returnedArr = arr.join(' ')

// console.log(arr)
// console.log(returnedArr)

//reverse

// const arr = [1,2,3,4,4,5,6,5]

// const returnedArr = arr.reverse()

// console.log(arr)
// console.log(returnedArr)

// let str = 'I am reversed string'

// const myArr = str.split('')
// myArr.reverse()
// str = myArr.join('')
// console.log(str)