const pizza = {
    doughTypes: ['wheat', 'white'],
    doughSize: ['thin', 'deep dish'],
    price: 15,
    toppings:[],
    isCooked: false,
    cookPizza: function(){
         this.isCooked = true
    }
}

function addProperty(prop, val, pizza){
    pizza[prop] = val
    return pizza
}

pizza.doughSize.push('large')
const newPizzaSvc = addProperty('delivery', true, pizza)

console.log(newPizzaSvc)