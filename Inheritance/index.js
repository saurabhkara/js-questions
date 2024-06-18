//OOPs: Object Oriented Programming is programming paradigm based on the concept of Objects.
//Pillars of OOPs: 1. Encapsulation 2.Abstraction 3.Inheritance 4. Polymorphism
//-----------------------------------------------------------------------------------------

//Inheritance: Inheriting the properties and methods of parents to children. It helps to iliminate redudant code.
//It works in DRY concept (Donot repeat yourself)

//-----------------------------------------------------------------------------------------
// Prototype is mechanism in javascript through which object inherits features from one another

const obj1 = {
  name: "Saurabh",
};

const obj2 = {
  name: "Ram",
  age: 25,
};

console.log(obj1.__proto__);
obj1.__proto__ = obj2;
console.log(obj1.__proto__);

//--------------------------------

Function.prototype.myfunc = function () {
  console.log("Mera function");
};

// -------------------------------------------

function Student(name, city) {
  this.name = name;
  this.city = city;
}

const student1 = new Student("saurabh", "Ara");
const student2 = new Student("Ram", "World");
// student1.nationality = "Indian";
// student2.nationality = "Indian";
// DRY concept voilates (code is repeating);
Student.prototype.nationality = "Indian";

console.log(student1.nationality);
console.log(student2.nationality);

//------------------------------------------------
