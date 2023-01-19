function makeCar(accelerationRate, brakeRate) {
  return {
    speed: 0,
    accelerationRate,
    brakeRate,
    accelerate() {
      this.speed += this.accelerationRate;
    },

    brake() {
      this.speed = this.speed - this.brakeRate > 0 ? this.speed - this.brakeRate : 0;
    }
  }
}


let sedan = makeCar(8, 6);
sedan.accelerate()
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);