let form = document.cars

form.addEventListener('submit', function(event){
    event.preventDefault()
    const cars = form.likes
    const likedCars = []

    //Checkboxes
    for(let i = 0; i < cars.length; i++){
        if (cars[i].checked){
            likedCars.push(cars[i].value)
        }
    }

})

