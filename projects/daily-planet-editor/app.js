
// function funcName(parameters){
//     // code to run
// }

// //calling the function
// funcName(arguments)

//arguments go inside of the parameters


// toaster example

// funcName --> toaster
// calling the function --> pushing the lever down
// parameters --> the slots of the toaster
// arguments --> the bread that goes inside the slots


function toaster(slot1, slot2){
    return slot2 + ' ' + slot1
}

let slot1 = 'Bread'
// let slot2 = 'Bagel'
  
console.log(toaster(slot1, "Rye Bread"))