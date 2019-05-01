// function CarFactory(engineType, carColor, wheelTypes, hasSteeringWheel, isManual){
//     this.engineType = engineType
//     this.carColor = car
//     this.wheelTypes = wheelTypes
//     this.hasSteeringWheel = hasSteeringWheel
//     this.isManual = isManual
//     this.hasKeys = true
//     this.milage = 0
// }

// const sergesCar = new CarFactory('V8', 'ferrari red', 'spinners', false, true)

// sergesCar.milage += 100


// console.log(sergesCar)


function BadGuy(agenda, physicalDeformity, dramaticLifeStory, weapon, archNemesis, themeSong){
    this.agenda = agenda
    this.dramaticLifeStory = dramaticLifeStory
    this.weapon = weapon
    this.archNemesis = archNemesis
    this.themeSong = themeSong
    this.physicalDeformity = physicalDeformity
    this.hitPoints = 100
    this.powerLevel = Math.floor(Math.random() * 100 + 20)
}

const cesar = new BadGuy('take over aina', 'jacked biceps', 'raised by seagulls', 'yoga mat', 'Samwise', 'thotiana')

console.log(cesar)