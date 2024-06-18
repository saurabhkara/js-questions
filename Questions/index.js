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
