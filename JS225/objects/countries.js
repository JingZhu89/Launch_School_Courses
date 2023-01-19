function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    getDescription() {
      if (this.visited === true) {
        return this.name + ' is located in ' + this.continent + '. I have visited ' + this.name;
      } else {
        return this.name + ' is located in ' + this.continent + '. I haven\'t visited ' + this.name;
      }

    },

    visitCountry() {
      this.visited = true;
    }
  }
}
let canada = makeCountry('Canada', 'North America');
console.log(canada.getDescription()); // "Canada is located in North America. I haven't visited Canada."
console.log(canada.visitCountry());
console.log(canada.getDescription()); // "Canada is located in North America. I have visited Canada."