var shopper = {
    namePerson: 'Bob',
    agePerson: 25,
    oldEnough: true,
    nameAge:function myPerson(){
        return this.namePerson + ' ' + this.agePerson;
    },
    groceryCart: ['Spagett', 'Eggs', 'Bacon', 'Almond Milk']
}
console.log(shopper)