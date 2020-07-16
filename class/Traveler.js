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