console.log("JavaScript Question");
// Q.1 What are the possible ways to create objects in JavaScript?

const obj1 = {
  name: "Saurabh1",
};

const obj2 = new Object({ name: "Saurabh2" });

const obj3 = Object.create({ name: "Saurabh3" });

function Obj(name) {
  this.name = name;
}

const obj4 = new Obj("Saurabh4");

class Obj5 {
  constructor(name) {
    this.name = name;
  }
}

const obj5 = new Obj5("Obj5");
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);
// console.log(obj5);

//---------------------------------------------------------------
//Q.2 What is a prototype chain ?

function Person(name, city) {
  this.name = name;
  this.city = city;
}

function Employee(name, city, id) {
  Person.call(this, name, city);
  this.eid = id;
}

// console.log(Employee.prototype);
// console.log(Person.prototype);

const person = new Person("saurabh", "Ara");
const employee = new Employee("Saurabh Kumar", "Ara", 1);

// console.log(person);
// console.log(employee);

//---------------------------------------------------------------------
// Q.3 What is the difference between Call, Apply and Bind ?

const referenceObj = {
  name: "Saurabh refered",
  print: function (city) {
    console.log(`Name`, this.name, "is from", city);
  },
};
const anotherObj = {
  name: "Ram",
};
referenceObj.print.call(anotherObj, "Patna");
referenceObj.print.apply(anotherObj, ["Ara"]);
const bindCallback = referenceObj.print.bind(anotherObj, "Varanasi");
bindCallback();

// Q.4 What is JSON?

const parsedObj = {
  name: "Saurabh",
};

console.log(JSON.stringify(parsedObj));
console.log(JSON.parse('{"name":"Saurabh"}'));

// Q.5 What is the purpose of the array slice method ?
//The slice() method returns the selected elements in an array as a new array object.

const sambleArr = [2, 5, 7, 8, 9, 52, 65];
console.log(sambleArr.slice(0, 5));

// Q.6 What is the purpose of the array splice method ?
//The Splice methode is used to add/delete elements to/from the array and it returns deleted elements
console.log(sambleArr.splice(2, 1, 6));
console.log(sambleArr);

// Q.7 Difference between Object and Map
// Object and Map are similar to each other both let you set keys to value, retrieve values, delete keys.
// The keys of object can be only string and symbol whereas it can be anything(function, primitive data type).
// Map can be iterable(forEach can be used directly) whereas Object cannot iterate directly(need keys).
// Map perform better than object

const sampleObj = {
  name: "Saurabh",
};

const sampleMap = new Map([["name", "saurabh"]]);
console.log(sampleObj, sampleMap);
sampleMap.forEach((item) => console.log(item));

// Q.8 Difference between == and ===
// == used for value comparison and === equals to value and type comparison

console.log(10 == "10");
console.log(10 === "10");

// Q.9 First class function
// In Javascript, functions are treated like any other variables.

// Q.10 First Order Function
// A first-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

const firstOrder = () => console.log("First Order");

// Q.10 Higher Order Function
// Higher Order function is function that takes a function as argument or returns a function as return value

function higherOrderFunction(func) {
  return func;
}

console.log(
  higherOrderFunction(() => {
    console.log("Function");
  })
);

// Q.11 Unary function
// A function that accept only one argument

function printName(name) {
  console.log("Name", name);
}

console.log(printName("Saurabh"));

// Q.12 What is Currying function ?
// Currying is the process taking a function with multiple arguments and turning it into sequence of functions each only with single argument
// Curried function are great to improve code reuseablity and function composition

function mutipleArgs(a, b, c, d) {
  return a + b + c + d;
}

function currying(a) {
  return (b) => {
    return (c) => {
      return (d) => {
        return a + b + c + d;
      };
    };
  };
}

console.log(currying(5)(4)(3)(2));

// Q.13 Pure function
//Pure function is function whose return value is only determined by its arguments witout side effect

function pureFunc(a, b) {
  return a + b;
}
console.log(pureFunc(5, 6));

// Q.14 Purpuse of use of let keyword
// Let statement variable is used to create block scope local variable. It also hoist but cannot accessed before its intialization

// console.log(avariable);
let avariable = 50;
console.log(avariable);

// Q.15 Difference between let and var
// let is block scope variable where as var is function scope
// let is also hoist but not intialized whereas var is hoist
// var can be re-declare whereas let cannot within same scope

//Q.16 Redeclare variable in switch block

let flag = 7;
switch (flag) {
  case 2: {
    let name = "saurabh";
    console.log(name);
    break;
  }
  case 7: {
    let name = "Sanjay";
    console.log(name);
    break;
  }
  default: {
    console.log("Default");
  }
}

// Q.18 Temporal Dead Zone
//Temporal Dead is behavior in JavaScript that occurs when declaring variable with let and const keyword but not with var.

console.log(tdz1);
// console.log(tdz2); // Add breakpoint here
var tdz1 = "temporal";
let tdz2 = "temporal dead zone";

// Q.22 IIFE
//IIFE(Immediately invoked function expression) is JavaScript function it run as soon as possible as it is defined.
//The primary reason to use an IIFE inner declared variables cannot be accessed outside of function.

const rett = (function () {
  var abb = 10;
  console.log(abb);
  return abb;
})();

console.log("rett", rett);

// Q. What is memoization ?
// Memoization is technique to increase the functions performance by caching its previously computed result.
// If its already calculated in past we don't need to calculate simply return the value from cache.
// JavaScript Closures are to used for memoization.

function memoization() {
  const cache = {};
  return function (value) {
    if (cache[value]) {
      console.log("Returning from cache");
      return cache[value];
    }
    const calculatedValue = value ** 3;
    cache[value] = calculatedValue;
    return calculatedValue;
  };
}

const memo = memoization();
console.log(memo(15));
console.log(memo(15));
console.log(memo(15));

// Q. What is Hoisting ?
// Hoisting is javaScript behaviour in which variables,functions are moved to top of their scope before its code execution;

console.log(name1);
var name1 = "saurabh";

// Q. What are classes in JavaScript ?
// Classes in javascript is syntatic sugar over javascript exsiting type of prototype based inheritance.
//Classes are the blue print of objects.

class PrintName {
  constructor(name) {
    this.name = name;
  }
  print() {
    console.log(this.name);
  }
}

const printObj = new PrintName("Saurabh");
printObj.print();

// Q. What are closures ?
//Closures are function and its lexical scope within which it has been defined. It has access to its variable, outer function variable and global variable.

function outer() {
  let name = "closure";
  function inner() {
    console.log("Inner", name);
  }
  inner();
}

outer();

// Q. What are the modules ?
// Module refers to small indepedent reuseable code. It also act as foundation of many javascript design patterns.

// Q. What are promises in JavaScript ?
// Promises in javascript is object that will return a value sometime in future either a resolve value or rejected value.

const promise = new Promise((resolve, reject) => {
  console.log("Promise ");
  resolve("Resolved");
});

promise
  .then((res) => {
    console.log(res);
    return "data";
  })
  .then((res) => {
    console.log(res);
    throw new Error("error");
  })
  .finally((final) => {
    console.log("finally", final);
  })
  .catch((error) => {
    console.log(error);
  });

// Q. What are callbacks function
// Callback is function passed into another function as argument and invoked inside outer function to perform some  action

function outerFunc(callback) {
  const name = prompt("Please enter your name");
  callback(name);
}

function callbackFunc(name) {
  console.log("Callback function invoked", name);
}

outerFunc(callbackFunc);
