const form = document.addTodos
let todoList = []

axios.get('https://api.vschool.io/Kip/todo/').then((response)=> {
    todoList.push(...response.data)
    displayToDos(response.data)
})

function displayToDos(todos, updated){
    if(updated){
        document.getElementById('main').innerHTML = ''
    }
    todos.forEach((todo)=>{
        let parentDiv = document.createElement('div')
        let titleH2 = document.createElement('h2')
        let descP = document.createElement('p')
        let priceTag = document.createElement('p')
        let image = document.createElement('img')
        let checkBox = document.createElement('input')
        let deleteBtn = document.createElement('button')

        descP.innerText = todo.description
        titleH2.innerText = todo.title
        priceTag.innerText = todo.price
        deleteBtn.innerText = 'Delete'
        if(todo.imgUrl !== undefined){
            image.setAttribute("src", todo.imgUrl)
            parentDiv.appendChild(image)
        }
        checkBox.setAttribute('type', 'checkbox')
        parentDiv.setAttribute('class', 'todoBox')

        deleteBtn.addEventListener('click', function(){
            parentDiv.style.display = 'none'
            axios.delete(`https://api.vschool.io/Kip/todo/${todo._id}`)
        })

        checkBox.addEventListener('click', function(){
            checkTodo(todo)
            axios.get('https://api.vschool.io/Kip/todo/').then(res =>{
                todoList = res.data
            })
        })
        if (todo.completed){
            checkBox.checked = true
            parentDiv.style.textDecoration = 'line-through'
        }else {
            parentDiv.style.textDecoration = 'none'
        }


        parentDiv.appendChild(checkBox)
        parentDiv.appendChild(deleteBtn)
        parentDiv.appendChild(titleH2)
        parentDiv.appendChild(descP)
        parentDiv.appendChild(priceTag)
        document.getElementById('main').appendChild(parentDiv)
    })
}

const checkTodo = oldTodo => {
    axios.put(`https://api.vschool.io/Kip/todo/${oldTodo._id}`, {completed: !oldTodo.completed}).then(response => {
        const newList = todoList.map(todo => todo._id === oldTodo._id ? response.data : todo)
        displayToDos(newList, true)
    })
}

// const form = document.addTodos

form.addEventListener('submit', function(event){
    event.preventDefault()

    let title = form.title.value
    let description = form.description.value
    let price = form.price.value
    let imgUrl = form.imgUrl.value

    const newObject = {
        title,
        description,
        price,
        imgUrl
    }

    postTodo(newObject)
})


const postTodo = (newTodo) => {
    axios.post('https://api.vschool.io/Kip/todo/', newTodo).then((response)=>{
        todoList.push(response.data)
        displayToDos([response.data])
    })
}




// Get --> get the information
// Post --> Add a new item
// Put --> Update an existing item
// Delete --> delete an existing item