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

// Q.13 What is memoization ?
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

// Q.14 What is Hoisting ?
// Hoisting is javaScript behaviour in which variables,functions are moved to top of their scope before its code execution;

console.log(name1);
var name1 = "saurabh";

// Q.15 What are classes in JavaScript ?
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

// Q.16 What are closures ?
//Closures are function and its lexical scope within which it has been defined. It has access to its variable, outer function variable and global variable.

function outer() {
  let name = "closure";
  function inner() {
    console.log("Inner", name);
  }
  inner();
}

outer();

// Q.17 What are the modules ?
// Module refers to small indepedent reuseable code. It also act as foundation of many javascript design patterns.

// Q.18 What are promises in JavaScript ?
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

// Q.19 What are callbacks function
// Callback is function passed into another function as argument and invoked inside outer function to perform some  action

function outerFunc(callback) {
  const name = prompt("Please enter your name");
  callback(name);
}

function callbackFunc(name) {
  console.log("Callback function invoked", name);
}

// outerFunc(callbackFunc);

// Q.20 What is callback in callback ?
// You can nest one callback inside into another callback to execute the actions sequentially one after another.

// Q.21 What is promise chaining ?
// Process of executing a sequence of asynchronous task one after another using promise is called promise chaining.

const samplePromise = new Promise((resolve, reject) => {
  console.log("First Promise");
  resolve("Resolved");
});

samplePromise
  .then((res) => {
    console.log(res);
    return "Task 1";
  })
  .then((res) => {
    console.log(res);
    return "Task 2";
  })
  .then((res) => {
    console.log(res);
  });

// Q.22 Promise.all([])
// Promise.all([]) method takes array of promises and gets resolved when all promises are resolved. It will rejected anyone of rejected.

const promise1 = new Promise((resolve, reject) => {
  resolve("Promise 1");
});

const promise2 = new Promise((resolve, reject) => {
  // reject("Promise 2");
  resolve("Promise 2");
});

const promise3 = new Promise((resolve, reject) => {
  // reject("Promise 3");
  resolve("Promise 3");
});

Promise.all([promise1, promise2, promise3])
  .then((res) => {
    console.log("Promise resolved", res);
  })
  .catch((err) => {
    console.log("rejected", err);
  });

// Q.23 Promise.race() method
// Promise.race() method takes array of promise and return the promise instance which is firstly resolved.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1st Promise");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2nd promise");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("3rd Promise");
  });
});

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Rejected", err);
  });

// Q.24 What is async function ?
// Async function is function declared with async keyword which enables asynchrounous, promise based behaviour to be written in cleaner style to avoid promise chaining.

async function sampleAsyncFunc() {
  console.log("Async  funct");
}

sampleAsyncFunc();

// Q.25 Iterable in Object in JavaScript

const iterableObj = {
  name: "saurabh",
  age: 28,
  address: "Ara",
  [Symbol.iterator]: function () {
    const keys = Object.keys(this);
    let i = 0;
    return {
      next: () => {
        return {
          value: iterableObj[keys[i++]],
          done: i > keys.length,
        };
      },
    };
  },
};

const iterator = iterableObj[Symbol.iterator]();
console.log("#iterator", iterator.next());
console.log("#iterator", iterator.next());
console.log("#iterator", iterator.next());
console.log("#iterator", iterator.next());

// Q.26 Global Execution context in JavaScript
// Global execution context is special environment created by javascript engine to execute and run javascript code

// Q.27 Functional execution context
// Functional execution context is created whenever function is invoked within global execution context.

// Q.28 Debouncing
// Debouncing is programming pattern that allows delaying execution of some piece of code until a specied time to avoid
// to avoid unneccasary CPU cycles, API calls and improve performance.

// Q.29 Program to reverse each word in the given string

let inputStr1 = "Welcome to JavaScript Practice Question";

function reverse(str, delimeter) {
  return str.split(delimeter).reverse().join(delimeter);
}

let result1 = reverse(inputStr1, "");
console.log(result1);
result1 = reverse(result1, " ");
console.log("#result1", result1);

// Q.30 Check given two strings are anagram of each other

function sortStr(str) {
  let sortedStr = str.toLowerCase().split("").sort().join("");
  return sortedStr;
}

const inputStr2 = "Mary";
const inputStr3 = "Army";

const resultStr1 = sortStr(inputStr2);
const resultStr2 = sortStr(inputStr3);
if (resultStr1 === resultStr2) {
  console.log("Anagram of each other");
} else {
  console.log(" Not Anagram of each other");
}

// Q.31 Fibonacci Series
const fiboArr = [0, 1];

function fibonacciSeries(n) {
  for (let i = 0; i < n; i++) {
    fiboArr[i + 2] = fiboArr[i] + fiboArr[i + 1];
  }
  console.log(fiboArr);
}

fibonacciSeries(5);

// Q.32 Armstrong Number
function armStrong(num) {
  let temp = num;
  let sum = 0;
  while (temp) {
    let lastDigit = temp % 10;
    temp = parseInt(temp / 10);
    sum += lastDigit ** 3;
  }
  return sum === num;
}

console.log(armStrong(153));
console.log(armStrong(15));

// Q.33 Factorial Number
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5));

function factorialRecursion(num) {
  if ((num === 0) | (num === 1)) {
    return 1;
  }
  return num * factorialRecursion(num - 1);
}
console.log(factorialRecursion(5));

// Q.34 Swapping two variables without temporary variable

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);

// Q.35 Palindrom

let str1 = "a545a";

function isPalindrom(str) {
  str1 = str1.toLowerCase();
  let str2 = str1.split("").reverse().join("");
  return str1 === str2;
}

console.log(isPalindrom(str1));

// Q.36 Remove Duplicate elements from Array

let dupicateElementArr = [1, 1, 2, 5, 5, 6, 7, 7];

function removeDuplicate(arr) {
  const set = new Set(arr);
  return [...set];
}

console.log(removeDuplicate(dupicateElementArr));

// Q.37 Add two array values of same index and create another array

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [2, 3, 4, 5, 6, 7, 8, 9];

function addArray(arr1, arr2) {
  const result = arr1.map((item, index) => {
    return item + arr2[index];
  });
  return result;
}

console.log(addArray(arr1, arr2));

// Q.38  2:0 => 2 is element of arr3 and 0 is how many times 2 is repeating in arr4;

let arr4 = [3, 4, 5, 6, 5, 4, 5];
let arr3 = [2, 3, 4, 5, 6];

function countFreequency(arr3, arr4) {
  const result = arr3.map((item, index) => {
    let count = 0;
    arr4.forEach((item2) => {
      if (item === item2) {
        count++;
      }
    });
    return `${item}:${count}`;
  });
  return result;
}

console.log(countFreequency(arr3, arr4));

// Q.39 Convert nested Object into flat Object

let student = {
  name: "Ram",
  address: {
    prersonal: {
      city: "Hapur",
      pincode: 245101,
    },
    office: {
      city: "Noida",
      pincode: 201301,
    },
  },
};

// output format

// let output = {
//   student_name: "ram",
//   student_address_personal_city: "Hapur",
//   student_address_personal_pincode: 245101,
//   student_address_office_city: "Noida",
//   student_address_office_pincode: 201301,
// };

function flatteningObj(obj, name) {
  let result = {};
  if (typeof obj !== "object") {
    return;
  }

  for (let key in obj) {
    let keyValue = name + "_" + key;
    if (typeof obj[key] === "object") {
      let innerResult = flatteningObj(obj[key], keyValue);
      for (let key2 in innerResult) {
        result[key2] = innerResult[key2];
      }
    } else {
      result[keyValue] = obj[key];
    }
  }

  return result;
}

console.log(flatteningObj(student, "student"));

// Q.40 Write function for add(a)(b)(c)(d)...()

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}

console.log(add(3)(4)(5)());
console.log(add(3)(4)(5)(6)());

// Q.41 Program to convert multidimesional array to single array
let arr = [1, [2, 3], [4, 5, 6, [7, 8]], [9], 11];

function flatteningArr(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  const result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      const innerResult = flatteningArr(item);
      for (let item2 of innerResult) {
        result.push(item2);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flatteningArr(arr));

// Q.42 Program to sort only positive number
const arr6 = [-1, 40, 20, -4, 10, 2, 70, -2, 6, 9];

function sortOnlyPositiveNumber(arr) {
  const sortedArr = arr6.filter((item) => item > 0).sort((a, b) => a - b);
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = sortedArr[index++];
    }
  }
  return arr;
}

console.log(sortOnlyPositiveNumber(arr6));

// Q.43 Remove duplicate keys and merge array values of an object in JavaScript

const originalArr = [
  { id: 1, element: [1, 2] },
  { id: 2, element: [3, 4] },
  { id: 2, element: ["a", "b"] },
  { id: 3, element: ["a2b"] },
];
function removeDuplcateAndMerge(arr) {
  const result = arr.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].element = [...acc[item.id].element, ...item.element];
    } else {
      acc[item.id] = item;
    }
    return acc;
  }, {});
  return Object.values(result);
}

console.log(removeDuplcateAndMerge(originalArr));

// Q.44 Shift zero at the end of array

let arr7 = [10, 0, 230, 7, 9, 0, 10];

function shiftZeroAtEnd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    } else {
      arr[i - count] = arr[i];
    }
  }

  for (let i = arr.length - count; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

console.log(shiftZeroAtEnd(arr7));

// Q.45 Program to fetch student Object whose average marks is grether than other students

const students = [
  { name: "Ram", marks: [70, 80, 65, 90, 65] },
  { name: "Shyam", marks: [80, 62, 70, 75, 81] },
  { name: "M Sharan", marks: [74, 67, 72, 69, 84] },
];

function getStudentDetail(arr) {
  const result = arr.reduce(
    (acc, item) => {
      const sum = item.marks.reduce((acc2, item) => {
        acc2 = acc2 + item;
        return acc2;
      }, 0);
      const currentAverage = sum / 5;
      if (acc.average < currentAverage) {
        return {
          average: currentAverage,
          item: item,
        };
      }
      return acc;
    },
    { average: 0, item: {} }
  );
  return result;
}

console.log(getStudentDetail(students));

// Q.46  Reverse the String without inbuild method

const str4 = "Hello World";

function reverseStrWithoutInbuild(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}
console.log(reverseStrWithoutInbuild(str4));

// Q.47 Print 1 to 5 number in every one

function printNumber() {
  let count = 1;
  const setIntervalId = setInterval(() => {
    console.log(count++);
    if (count === 6) {
      clearInterval(setIntervalId);
    }
  }, 1000);
}

// printNumber();

// Q.49 Program to return odd repeating value of an array with count
const countOriginalArr = ["a", "a", "b", "d", "e", "d", "a", "b"];
// output format :['a:3','e:1'];

function countOddElem(arr) {
  const outputObj = arr.reduce((acc, item) => {
    if (acc[item]) {
      acc[item] = acc[item] + 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});
  const result = Object.entries(outputObj)
    .filter((item) => {
      if (item[1] % 2 === 1) return true;
    })
    .map((item) => `${item[0]}:${item[1]}`);
  return result;
}

console.log(countOddElem(countOriginalArr));

// Q.50 Same key value put together in array

let input = [
  { type: "abc", value: 123 },
  { type: "def", value: 123 },
  { type: "abc", value: 452 },
];

// Output => { 'abc':[123,453],'def':[123]}

function sameKeyValue(arr) {
  const resultObj = arr.reduce((acc, item) => {
    if (acc[item.type]) {
      acc[item.type] = [...acc[item.type], item.value];
    } else {
      acc[item.type] = [item.value];
    }
    return acc;
  }, {});
  return resultObj;
}

console.log(sameKeyValue(input));

// Q.51 Reverse the given string  inplace(without extra space)

function revesStringRecursive(str) {
  if (str === "") {
    return "";
  }
  const remainingStr = str.slice(1);
  console.log("#remainig", remainingStr);
  return revesStringRecursive(remainingStr) + str[0];
}

console.log(revesStringRecursive("saurabh"));

// Q.52 Print Duplicate characters from string
//Time comlexity = O(n)
function printDuplicateCharacters(str) {
  if (str === "" || typeof str !== "string") {
    return;
  }
  let obj = {};
  for (let char of str) {
    if (obj[char]) {
      obj[char] = obj[char] + 1;
    } else {
      obj[char] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] > 1) {
      console.log("Duplicate char==>", key);
    }
  }
}

printDuplicateCharacters("saurabhkumar");

// Q.53 Check given strings are anagram of each other in better and optimize way

function anagramOptimizeWay(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return;
  }
  let obj = {};
  for (let char of str1) {
    if (obj[char]) {
      obj[char] = obj[char] + 1;
    } else {
      obj[char] = 1;
    }
  }

  for (let char of str2) {
    if (obj[char]) {
      obj[char] = obj[char] - 1;
    } else {
      return false;
    }
  }
  return true;
}

// T(n)= O(n)
console.log(anagramOptimizeWay("army", "mary"));

// Q.54 Countv the number of Vowels and consonants in given string

function countVowelAndConsonant(str) {
  let vowelCount = 0;
  let consonantCont = 0;
  const vowelArr = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    if (vowelArr.includes(str[i])) {
      vowelCount++;
    } else {
      consonantCont++;
    }
  }
  return [vowelCount, consonantCont];
}

console.log(countVowelAndConsonant("saurabh"));

// Q.55 Count the occurance of given character in a string

function countGivenCharacter(str, char) {
  if (typeof char !== "string" || str === "") {
    return null;
  }
  let count = 0;

  for (let item of str) {
    if (item === char) {
      count++;
    }
  }
  return count;
}

console.log(countGivenCharacter("saurabh", "b"));

// Q.56 Print first non-repeating occurance of character in string

function printFirstOccurance(str) {
  if (typeof str !== "string" || str === "") {
    return;
  }
  let count = {};
  for (let char of str) {
    if (count[char]) {
      count[char] = count[char] + 1;
    } else {
      count[char] = 1;
    }
  }

  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }
  return false;
}

console.log(printFirstOccurance("saurabh"));

// Q.57 Reverse words in given Sentence

let sentence1 = "anyone can achieve anything";

function reverseWordsOfSenetence(sentence) {
  if (typeof sentence !== "string" || sentence === "") {
    return;
  }
  return sentence.split(" ").reverse().join(" ");
}

console.log(reverseWordsOfSenetence(sentence1));

// Q.58 Check strings are rotation of each other
// Two strings are rotations of each other if they contain the same characters in the same order,
//just shifted by some number of positions.

const rotation1 = "saurabh";
const rotation2 = "aurabhs";
//Method 1
function isRotationByLoop(str1, str2) {
  let tempStr = str1;
  let length = str1.length;
  for (let i = 0; i < length; i++) {
    let firstChar = tempStr[0];
    let remainigStr = tempStr.substring(1);
    tempStr = remainigStr + firstChar;
    if (tempStr === str2) {
      return true;
    }
  }
  return false;
}

console.log(isRotationByLoop(rotation1, rotation2));

//Method 2 KMP Algorithm

function isRotationByKMP(str1, str2) {
  const concantedStr = str1 + str1;
  return concantedStr.includes(str2);
}

console.log(isRotationByKMP(rotation1, rotation2));

// Q.59 Remove duplicate characters from string

const dupliStr = "saurabh";

//method 1 using set
function removeDuplicateUsingSet(str) {
  const set = new Set([...str]);
  let result = "";
  set.forEach((char) => (result = result + char));
  return result;
}
console.log(removeDuplicateUsingSet("saurabh"));

//method 2 Using Object

function removeDuplicateUsingObj(str) {
  const obj = {};

  for (let char of str) {
    if (obj[char]) {
      obj[char] = obj[char] + 1;
    } else {
      obj[char] = 1;
    }
  }
  let result = "";
  for (let char of str) {
    if (obj[char]) {
      result = result + char;
      delete obj[char];
    }
  }
  return result;
}

console.log(removeDuplicateUsingObj("saurabh"));

// Q.60  Maximum occuring character in given string

function maxOccurredChar(str) {
  if (typeof str !== "string" || str === "") {
    return;
  }
  let obj = {};
  for (let char of str) {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
  }
  let max = -1;
  let result = "";

  for (let key in obj) {
    if (max < obj[key]) {
      max = obj[key];
      result = key;
    }
  }

  return [result, max];
}

console.log(maxOccurredChar("saurabh"));
