class Traveler {
    constructor (name){
        this.name= name
        this.food = 1
        this.isHealthy= true
    }

    hunt(){
       this.food += 2
    }


eat(){
    if (this.food === 0){
        this.isHealthy = false
     }else {
         this.food -= 1
     }
}
        
}
class Doctor extends Traveler {
    constructor(name){
    super (name, food)
    this.isHealthy= true
    }

    heal(traveler){
        this.isHealthy === true
    }
}


class Hunter extends Traveler {
    constructor(name, isHealthy){
        super(name, is.isHealthy)
        this.food = 2
    }

    eat(){
        if (this. food === 0){
            this.isHealthy= false
        } else {
            this.food -= 2
        }
    
    giveFood(traveler, numOfFoodUnits){
        if (this.food !== 2){
            return "unable to transfer food"
        }else this.food - numOfFoodUnits
        }
    }
    
}


let bob = new Traveler ('Bob')
console.log(bob)
bob.hunt()
console.log(bob)
bob.eat()
console.log(bob)
bob.eat()
bob.eat()
bob.eat()
console.log(bob)


let deb = new Hunter ('Deb')