let form = document.travel;

form.addEventListener('submit', function(event){
    event.preventDefault()
    let location = form.location
    let theLocation = []
    let diet = form.diet
    let theDiet = []

    for(let i = 0; i < location.length; i++){
        if (location[i].checked){
            theLocation.push(location[i].value)
        }
    }

    for(let s = 0; s < diet.length; s++){
        if (diet[s].checked){
            theDiet.push(diet[s].value)
        }
    }

    alert(
        `
        127.0.0.1:54070 says
        
        First Name: ${form.firstName.value}
        Last Name: ${form.lastName.value}
        Age: ${form.age.value}
        Gender: ${form.gender.value}
        Location: ${theLocation}
        Dietary Restrictions: ${theDiet}
        `
    )
})

