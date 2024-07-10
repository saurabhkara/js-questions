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
      console.log("Name", this.name, "New Name", this.newName);
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

//Note => this keyword inside arrow takes the value of this from its normal immediate parent function

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
