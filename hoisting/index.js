// Q.1 Guess the output

// console.log(y);
// y = 10;

//Ans: Reference Error, y is not defined
// y is intialized only, it isnt declared with let,const and var. So it cant be hoisted

//Q.2  Guess the output

console.log(y2);
var y2 = 10;

//Ans: undefined
// Declaration is hoisted to top of its scope. In execution context variable y is intialized with undefined in the form of key-value pair
//

// Q.3 Guess the output

y3 = 12;
console.log(y3);
var y3;

// Ans: 12
// Declaration is hoisted to the top of its scope. Before console. Its value is intialized with 12;

//Q.4 what will be output ?

// console.log(y4);
// // let y4 = 1;

//Ans: reference error
// let and const keyword variable cannot be accessed before its initialization;
// Currently variable is inside temporal dead zone

//Q.5 What is output ?

// var y5 = 10;
// let y5 = 10;
// console.log(y5);

//Ans: Indentifier is already been declared
// let and const keyword variables cannot be redeclared within same scope

//Q.6 Guess the output

function hoistingExample6() {
  console.log("Value of y6 variable", y6);
}

console.log("Value of y6 variable", y6);
var y6 = 52;
hoistingExample6();

// Q.7  Guess the output

function hoistingExample7() {
  y7 = 2;
}
hoistingExample7();
console.log(y7);

// Ans : 2
// Varaible which are not assigned without var in function
//declaration are considered as global variables

// Q.8  Guess the output

function hoistingExample8() {
  var y8 = 8;
}

// hoistingExample8();
// console.log(y8);

// Ans: reference error
// var is functional scope, its declared inside function, can not be accessed outside of function

// Q.9 Guess the output

function hoistingExample9() {
  console.log("9A");
}

hoistingExample9();

function hoistingExample9() {
  console.log("9B");
}

hoistingExample9();

// Ans: 9B 9B
// last fuction declaration will override the previous one

// Q.10 Guess the output

var y10 = 10;

function hoistingExample10() {
  y10 = 12;
  return;
  function y10() {}
}

hoistingExample10();
console.log(y10);

// Ans : 10
// y10 is redeclare and redefined insised the function
//function hoistingExample10() {
//  function y10() {}
//     y10 = 12;
//     return;
//
//   }
