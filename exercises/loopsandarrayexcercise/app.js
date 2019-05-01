

function createEvenArray(highestNum){
    // highestNum = [1,2,3,4,5,6,7,8,9,10]
    num = []
    for(let i = 1; i < highestNum; i++){
        if (i % 2 === 0){
            num.push(i)
        }
    }
    return num
}
// createEvenArray(10)


function addOdds(arr){
    //this is copying the previous array (spread operator)
    const x = [...arr]
    for(let i = 0; i < arr.length; i++){
            x.push(arr[i] + 1)
    }    
    return x
}

let evenArr = createEvenArray(10)

let arr2 = addOdds(evenArr)

console.log(arr2.sort(function(a, b){return a-b}))
