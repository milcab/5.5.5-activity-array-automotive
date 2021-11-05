//this includes the vehicle class as a module
import Vehicle from "./vehicleBaseClass";
class Car extends Vehicle {
    constructor(make, model, year, color, millage) {
        super(make, model, year, color, millage);
        this.maximumPassengers = 6;
        this.passanger = 0;
        this.numbersOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduledService = false;
    }

    loadPassenger(num) {
        //if passenger less than maximumPassengers availableRoom == true
        if (num < 0 || num > this.maximumPassengers) {
            return false;
        }

        const availableSeats = this.maximumPassengers - this.passanger
        const availableRoom = availableSeats >= num

        if (availableRoom) {
            this.passanger = this.passanger + num;
        }

        return availableRoom;
    }

    start() {
        this.started = this.fuel > 0
    }

    scheduleService() {
        this.scheduledService = this.mileage > 30000
    }
}

//this shows how to call from this module...
let v = new Car("Mecury", "Sedan", "1965", "color", 50000);

v.loadPassenger(4)
v.start()
v.scheduleService()
console.log({ v })
