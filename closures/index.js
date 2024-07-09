// Q.1 Guess the output

function outer1() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}

outer1()();

// Q.2 Guess the output
function outer2() {
  var a = 101;
  function inner() {
    console.log(a);
  }
  return inner;
}

var close2 = outer2(); // this will give you outer function
close2();

// Q.3 Guess the output

function outer3() {
  function inner() {
    console.log(a);
  }
  var a = 1022;
  return inner;
}

var close3 = outer3();
close3();

// Q.4 Guess the output

function outest4() {
  var c = 12;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 1089;
    return inner;
  }
  return outer;
}

var close4 = outest4()("Hi Closures");
close4();

// Q.5 Guess the output

function example5() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log("#5", i); // What is logged?
    }, 1000);
  }
}

example5();

// Q.6 Guess the output

var num6 = 10;
(function () {
  console.log(num6);
  var num6 = 202;
  console.log(num6);
})();

// Q.7  Create a function that multiply that multiples
// the arguments passed in this manner multiply(5)(6)(7)

function multiply(a) {
  return function (b) {
    return b ? multiply(a * b) : a;
  };
}

console.log(multiply(5)(6)(7)()); // currying

// Q.8 Guess the output

let count8 = 0;
(function () {
  if (count8 === 0) {
    let count8 = 1;
    console.log(count8);
  }
  console.log(count8);
})();

// Q.9  Modify the question number 5 to get 0,1,2 as output

// Q.10 Guess the output

(function immediateA(a) {
  return (function (b) {
    console.log(a);
  })(1);
})(0);
