function addSum(){
    let feild1 = document.getElementById('a').value 
    let feild2 = document.getElementById('b').value 

    let result = parseFloat(feild1) + parseFloat(feild2)
    document.getElementById("answer").innerHTML = result
}

function subSum(){
    let feild1 = document.getElementById('a1').value 
    let feild2 = document.getElementById('b2').value 

    let result = parseFloat(feild1) - parseFloat(feild2)
    document.getElementById("answer1").innerHTML = result
}

function multSum(){
    let feild1 = document.getElementById('a2').value 
    let feild2 = document.getElementById('b3').value 

    let result = parseFloat(feild1) * parseFloat(feild2)
    document.getElementById("answer2").innerHTML = result
}