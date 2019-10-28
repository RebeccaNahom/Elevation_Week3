// // // spot check1

class Animal {
    constructor(name, numLegs) {
        this.name = name,
        this.numLegs = numLegs,
        this.children = []
    }

    giveBirth(name){
        this.children.push(name)
    }
}
const cat = new Animal("Puss", 4)
const dog = new Animal("Leo", 4)
console.log(dog.name);

cat.giveBirth("Dolly")
console.log(cat.children) 



// // spot check 2
// class Human {
//     constructor(name, age, isFriendly){
//         this.name = name
//         this.age = age
//         this.isFriendly = isFriendly
//         this.children = []
//     }
// }

// const human1 = new Human("Ari", 29, false)
// console.log(human1);



// // spot check 3

// class Vehicle {
//     constructor(x, y, speed){
//         this.x = x;
//         this.y = y;
//         this.speed = speed;
//         Vehicle.carsSold ++
//         Vehicle.moneyEarned += 30000

//     }

//     static getInfo(){
//         console.log("We've sold " + Vehicle.carsSold + " vehicles.");      
//     }

//     static calculateMoney(){
//         console.log("Made " + Vehicle.moneyEarned + " dollars");
        
//     }

// }
// Vehicle.carsSold = 0
// Vehicle.moneyEarned = 0

// const car1 = new Vehicle("Honda Civic", 2016, 160 )
// const car2 = new Vehicle("Hyundai", 2010, 150 )

// Vehicle.getInfo()
// Vehicle.calculateMoney()



// // getter and setter:

// class Vehicle {
//     constructor(x, y, speed, fuel) {
//         this.x = x;
//         this.y = y;
//         this._speed = speed;
//         this._fuel = fuel
//     }

//     get fuel(){
//         return this._fuel
//     }

//     set fuel(amount) {
//         if (amount > 150) { return console.log("Too much") }
//         if (amount < 0) { return console.log("Not reasonable") }
//         this._fuel = amount
//     }
    
// }
// const a = new Vehicle()
// const c = new Vehicle()
// c.x = 3
// c.y = 1
// c.speed = 2 
// c.fuel = 155
// console.log(c.fuel) 



class Zoo {
    constructor() {
        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
        console.log("Added " + animal.name + " to the zoo")
    }

    showAnimals() {
        this.animals.forEach(a => console.log(a.name))

    }
}

class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
    }
}

const cat = new Animal("Puss", 4)
const zoo = new Zoo()

zoo.addAnimal(cat) // prints "Added Puss to the zoo"
zoo.showAnimals() // prints "Puss"
