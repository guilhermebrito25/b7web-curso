
class Person {

   static hands = 2;
   age = 0;

   constructor(name) {
      this.name = name;
   }

   sayHi() {
      console.log(this.name + ' ' + Person.hands)
   }
}

let p1 = new Person('guilherme')
p1.sayHi();


