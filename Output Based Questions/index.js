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

// Q.5 Guess the output

let greeting;
greetign = {}; // Typo!
console.log(greetign);

// Q.6

const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);

// Q.

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

// Reference
// https://github.com/lydiahallie/javascript-questions

// Debouncing practice
function exampleForDebounce() {
  console.log("Function called");
}

function debounce(func, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func();
    }, delay);
  };
}

// const deboun = debounce(exampleForDebounce, 2000);
// deboun();
// deboun();
// deboun();

//Throthling

function throatle(funct, delay) {
  let sId = null;
  let previousTimer = 0;
  return function () {
    let now = Date.now();
    if (now - previousTimer < delay) {
      return;
    }
    previousTimer = now;
    sId = setTimeout(() => {
      funct();
    }, delay);
  };
}

const throat = throatle(exampleForDebounce, 500);
throat();
throat();
throat();
throat();
setTimeout(() => {
  throat();
}, 600);
