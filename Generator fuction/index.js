//A generator function in JavaScript is a special type of function that allows you to pause and resume its execution.
//This means it can produce a sequence of values over time, instead of computing them all at once and returning them in a single value like a regular function.

// Advantange of using generator function
// Lazy Loading(Run only when you needed)
// Memory efficient

function* generatorFun() {
  yield 10;
  yield 15;
}

const iterator = generatorFun();
console.log(iterator.next());
console.log(iterator.next());
