function makeItem(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    setPirce(newPrice) {
      if (newPrice > 0) {
        this.price = newPrice;
      } else {
        console.log('Invalid price!');
      }
    },
    describe() {
      console.log(`Name: ${this.name}`);
      console.log(`ID: ${this.id}`);
      console.log(`Price: $${this.price}`);
      console.log(`Stock: ${this.stock}`);

    }
  }
}

let scissors = makeItem(0, 'Scissors', 10, 8);
let drill = makeItem(1, 'Cordless Drill', 15, 45);
let saw = makeItem(2, 'Circular Saw', 12, 95);
let hammer = makeItem(3, 'Sledge Hammer', 78, 45);
let boxCutter = makeItem(4, 'Box Cutter', 41, 15);
scissors.setPirce(8888);
scissors.describe();