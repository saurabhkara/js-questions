// Q.1 Polyfills for map method

Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    const value = cb(this[i], i, this);
    result.push(value);
  }
  return result;
};

const arr1 = [2, 5, 7, 8];
const result1 = arr1.myMap((item, index) => {
  return item + 2;
});
console.log(result1);

// Q.2 Pollyfill for filter method

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    const flag = cb(this[i], i, this);
    if (flag) {
      result.push(this[i]);
    }
  }
  return result;
};

const filterRes = arr1.myFilter((item, index) => {
  if (item > 5) {
    return true;
  } else {
    return false;
  }
});

console.log(filterRes);

// Q.3 Polyfill for reduce method

Array.prototype.myReduce = function (cb, acc) {
  let accumulator = acc;
  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = cb(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

const reducedesult = arr1.myReduce((acc, item) => {
  return acc + item;
});

console.log(reducedesult);

// Q.4 Polyfills for once method

function Once(cb) {
  let called = false;
  return function () {
    if (called === false) {
      called = true;
      cb();
    }
    return;
  };
}

function OnceCB() {
  console.log("Once called, cannot be called again");
}

const onc = Once(OnceCB);
onc();
onc();
onc();
onc();

// Q.5 Polyfill for Call

Function.prototype.myCall = function (context, ...args) {
  const obj = {};
  if (context) {
    context.cb = this;
    context.cb(...args);
  } else {
    obj.cb = this;
    obj.cb(...args);
  }
};

const obj2 = {
  name: "Saurabh22222",
};

function example4(city, district, state) {
  console.log(this.name, city, district, state);
}

example4.myCall(obj2, "Ara", "Bhojpur", "Bihar");

// Q.6 Polyfill for Apply

Function.prototype.myApply = function (context, args) {
  let obj = {};
  if (context) {
    context.cb = this;
    context.cb(...args);
  } else {
    obj.cb = this;
    obj.cb(...args);
  }
};

const obj6 = {
  name: "saurabh",
};

function example6(profession, state, salary) {
  console.log(this.name, profession, salary, state);
}

example6.myApply(obj6, ["Software developer", "Bihar", "20,000"]);

//Q.7 Polyfill for Bind method

Function.prototype.myBind = function (context, ...fArgs) {
  let obj = {};
  return function (...sArgs) {
    if (context) {
      context.cb = this;
      context.cb(...[...fArgs, ...sArgs]);
    } else {
      obj.cb = this;
      obj.cb(...[...fArgs, ...sArgs]);
    }
  };
};

const obj7 = {
  name: "Saurabh",
};

function example7(city, district, state) {
  console.log(this.name, city, district, state);
}

const retundBind = example7.bind(obj7, "Ara", "Bhojpur", "Bihar");

retundBind();
