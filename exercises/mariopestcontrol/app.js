let form = document.theList
let list = document.getElementById('list')

form.addEventListener('submit', e => {
    e.preventDefault()
    let theNextList = form.theNewList.value
    let goombas = theNextList * 5
    const result = goombas + " Coins!"


    let newText = document.createElement("p")
    newText.innerHTML = result
    list.appendChild(newText)
    form.theNextList.value = ""
})

let form2 = document.theList2
let list2 = document.getElementById('list2')

form2.addEventListener('submit', e => {
    e.preventDefault()
    let theNextList2 = form2.theNewList2.value
    let bomb = theNextList2 * 7
    const result = bomb + " Coins!"


    let newText2 = document.createElement("p")
    newText2.innerHTML = result
    list2.appendChild(newText2)
    form2.theNextList2.value = ""
})

let form3 = document.theList3
let list3 = document.getElementById('list3')

form3.addEventListener('submit', e => {
    e.preventDefault()
    let theNextList3 = form3.theNewList3.value
    let cheep = theNextList3 * 11
    const result = cheep + " Coins!"


    let newText3 = document.createElement("p")
    newText3.innerHTML = result
    list3.appendChild(newText3)
    form3.theNextList3.value = ""
})

