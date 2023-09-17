function creatPerson(name, lastName, age) {
   return {
      name,
      lastName,
      age,

      getFullName() {
         return `${this.name} ${this.lastName}`;
      }
   }
}

let person1 = creatPerson('guilherme', 'brito', 22);

console.log(person1.getFullName());