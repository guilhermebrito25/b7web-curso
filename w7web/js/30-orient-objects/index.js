class Person {

   steps = 0;
   _age = 0;

   constructor(name) {
      this.name = name;
   }

   takeStep() {
      this.steps++;
   }

   get age() {
      return this._age;
   }

   set age(x) {
      if(typeof x == 'number') {
         this._age = x;
      }
   }
}

let pessoa1 = new Person('joao')
let pessoa2 = new Person('maria')
let pessoa3 = new Person('pedro')

pessoa1.takeStep();

console.log(pessoa1.age)
pessoa1.age = 20
console.log(pessoa1.age)


