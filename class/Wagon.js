class Wagon{
    constructor(capacity, passengers){
        this.capacity= capacity
        this.passengers= []
    }
    
    getAvailableSeatCount() {
     return   this.capacity - this.passengers.length
    }

    join(traveler) {
        if (this.passengers.length <= this.capacity){
            this.passengers.push(traveler)
        }
    }


    totalFood(){
      let allFood= 0
      for (let i= 0; i < this.passengers.length; i++){
          let currentPassenger = this.passengers[i]
          allFood += currentPassenger.food
      }
      return allFood
    }

    shouldQuarantine(){
        return this.passengers.some(traveler=> traveler.isHealthy === true)
        }

    }

    
// use should quarantine should use a for loop
    
// use should quarantine should use a for loop
