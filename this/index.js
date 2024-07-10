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
    const getDetailArrow = () => {
      console.log(this.name);
    };
    getDetailArrow();
  },
};

user3.getDetail();

//Note => this keyword inside arrow takes from its normal parent function
