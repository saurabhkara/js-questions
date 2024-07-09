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

// Q.5
