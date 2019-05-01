document.getElementById('blue').addEventListener('mouseover', function(){
    this.style.backgroundColor = 'blue'
})

document.getElementById('blue').addEventListener('mousedown', function(){
    this.style.backgroundColor = 'red'
})

document.getElementById('blue').addEventListener('mouseup', function(){
    this.style.backgroundColor = 'yellow'
})

document.getElementById('blue').addEventListener('dblclick', function(){
    this.style.backgroundColor = 'green'
})

window.addEventListener('scroll', function(){
    document.getElementById('blue').style.backgroundColor = 'orange'
})

window.addEventListener('keydown', function(r){
    // if (r.keyCode === 114){
    //  document.getElementById('blue').style.backgroundColor = 'red'
    // }else {
    // }
    if(r.key === 'r'){
        document.getElementById('blue').style.backgroundColor = 'red'
    }else if (r.key === 'g'){
        document.getElementById('blue').style.backgroundColor = 'green'
    }else if (r.key === 'y'){
        document.getElementById('blue').style.backgroundColor = 'yellow'
    }else if (r.key === 'b'){
        document.getElementById('blue').style.backgroundColor = 'blue'
    }else if (r.key === 'o'){
        document.getElementById('blue').style.backgroundColor = 'orange'
    }else{
        document.getElementById('blue').style.backgroundColor = 'white'
    }
})
