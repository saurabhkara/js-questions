// this keyword is used to refer to currently executing object

// Q.1

this.a = 15;
console.log(this);

function example1() {
  console.log(this.a);
}

example1();

const example1A = () => {
  console.log(this.a);
};

example1A();

// Q.2 this keyword inside object

// this.name = "testing";
const user1 = {
  name: "Saurabh1",
  getDetail() {
    console.log(this.name);
  },
  getDetailArrow: () => {
    console.log(this.name);
  },
};

user1.getDetail();
user1.getDetailArrow();

const user2 = {
  name: "Saurabh2",
  childObj: {
    newName: "Saurabh K2",
    getDetail() {
      console.log("Name :", this.name, "New Name :", this.newName);
    },
  },
};
user2.childObj.getDetail();

// Note => this keyword in normal function points to only immediate object

const user3 = {
  name: "Saurabh3",
  getDetail() {
    let name = "vijay";
    const getDetailArrow = () => {
      console.log(this.name, name);
    };
    getDetailArrow();
  },
};

user3.getDetail();

//Note => this keyword inside arrow function takes the value of this from its normal immediate parent function

// Q .3  Guess the output
const object = {
  message: "Hello, World!",
  getMessage() {
    const message = "Hello, Earth!";
    return [this.message, message];
  },
};

console.log(object.getMessage());

// Q.4 Guess the output

function example4() {
  return {
    name: "Saurabh",
    ref: this,
  };
}

const user4 = example4();
console.log(user4.ref.name);

// Q.5 Chnage something in Q.4 to get name as Saurabh

function example5() {
  return {
    name: "Saurabh",
    ref: function () {
      return this;
    },
  };
}

console.log(example5().ref().name);

// Q.7 Guess the output

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}

const object7 = {
  length: 5,
  method() {
    console.log(arguments);
    arguments[0]();
  },
};

object7.method(callback, 1, 2);

// Q.8 Guess the Output

const object8 = {
  name: "Saurabh8",
  getName() {
    console.log(this.name);
  },
};

setTimeout(object8.getName, 1000);
// object.getName reference is passed inside setTimeout independently, so name property will no longer accessiable

// Q.9 Change something so that getName will the name property value 'Saurabh8'

setTimeout(function () {
  object8.getName();
}, 1000);

// Q.10 Create a Object calculator
let calculator = {
  read() {
    this.a = +prompt("a=", 0);
    this.b = +prompt("b=", 0);
  },
  mul() {
    return this.a * this.b;
  },
  sum() {
    return this.a + this.b;
  },
};

// calculator.read();
// console.log(calculator.mul());
// console.log(calculator.sum());

// Q.11 Implement calc

const calc = {
  num: 0,
  sum(a) {
    this.num += a;
    return this;
  },
  mul(a) {
    this.num *= a;
    return this;
  },
  sub(a) {
    this.num -= a;
    return this;
  },
};

const result = calc.sum(10).mul(5).sub(2);
console.log(result);

// Explicit this binding using call,apply and bind method

// Q. call method

const object9 = {
  name: "Saurabh 9",
};

function printName(city) {
  console.log(this.name, city);
}

printName.call(object9, "Ara");

// Q. Apply method
function printDetail(city, state) {
  console.log(this.name, city, state);
}
printDetail.apply(object9, ["Ara", "Bihar"]);

// Q. Bind method

function printNameAge(profession) {
  console.log(this.name, profession);
}

const bindReturnMethod = printNameAge.bind(object9, "software developer");
bindReturnMethod();
