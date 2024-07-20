console.log("Sita Ram, Jai Jai Ram");

// Q.1 Guess the output

function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

// sayHi();

// Q.2 Guess the output

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

// Q.3  Guess the output
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// console.log(member.getFullName());
// to add methods in contructor, prototype is used

// Q.4  Guess the output

function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = "Lydia";
const age = 21;

getPersonInfo`${person} is ${age} years old`;

// Q,5 Guess the output
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
//type of array is object.

// Reference
// https://github.com/lydiahallie/javascript-questions
