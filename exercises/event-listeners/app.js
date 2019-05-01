document.getElementById('clickMe').addEventListener('click', function(){
    alert('I was clicked')
})

document.getElementById('changeMe').addEventListener('click', function(){
    this.innerText = 'I was changed'
})

document.getElementById('blue').addEventListener('mouseover', function(){
    this.style.backgroundColor = 'blue'
})

document.getElementById('red').addEventListener('click', function(){
    document.getElementById('blue').style.backgroundColor = 'red'
})

const listItems = document.getElementById('myList').addEventListener()

for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('mouseover', function(){
        this.style.backgroundColor = 'purple'
    })
    listItems[i].addEventListener('click', function(){
        this.style.backgroundColor = 'white'
    })
}