let form = document.todoList
let list = document.getElementById('list')

form.addEventListener('submit', e => {
    e.preventDefault()
    let nextTodo = form.newTodo.value
    calculation = nextTodo.split(' ')
    const result = calculation[0] * calculation[2]

    let newItem = document.createElement("li")
    newItem.innerHTML = result
    list.appendChild(newItem)
    form.newTodo.value = ''
})

