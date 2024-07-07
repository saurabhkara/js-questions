// Promises are the javascript object that will going to return some value in future either a resolve value or
// a reason that is not resolved.
// States => Pending, Fulfilled and Rejected

const promiseInstance = new Promise((resolve, reject) => {
  //   resolve("First instance");
  reject(" First reject");
});

promiseInstance
  .then((res) => {
    console.log(res);
  })
  .then((res) => {
    console.log("Second then", res);
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    console.log(" Then after catch");
  });

// all then block will always called after promise resolved
// then block returns resolve promise by default
// catch block also returns resolve promise by default

// Promise.resolve()

Promise.resolve("Resolve block").then((res) => {
  console.log("then block", res);
});

// Promise.reject()
Promise.reject("Reject method")
  .then((res) => {
    console.log("then block", res);
  })
  .catch((err) => {
    console.log("catch block", err);
  });

// Promise combinators => Promise.all([])

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P1");
    reject("P1");
  }, 100);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    setTimeout(() => {
      //   resolve("P2");
      reject("P2");
    }, 2000);
  });
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3");
    // resolve("P3");
  });
});

//Promise.all([])
Promise.all([p1, p2, p3])
  .then((res) => {
    console.log("Promise all then=>", res);
  })
  .catch((err) => {
    console.log("Promise all catch=>", err);
  });

// Promise.race([])

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log("Promise Race then", res);
  })
  .catch((err) => {
    console.log("promise catch=>", err);
  });

// Promise.any([])

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log("Promise any then=>", res);
  })
  .catch((err) => {
    console.log("Promise Any=>", err);
  });

//Promise.allSettled([])

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log("Promise AllSettled  then=>", res);
  })
  .catch((err) => {
    console.log("Promise all Settled  catch=>", err);
  });

// Promise.allSettled([]) never goes in catch block either all promise instance resolved or rejected

// Q.1 Guess the Output

console.log("Start1");
function importantAction(username) {
  console.log("ImportantMessage1");
  setTimeout(() => {
    return `Send message to ${username}`;
  });
}

const message = importantAction("Saurabh");
console.log(message);
console.log("Stop1");

// Q.2 Guess the output

console.log("Start2");

function importAction2(username, cb) {
  console.log("Important Message2");
  setTimeout(() => {
    cb(`Sent message2 to ${username}`);
  }, 0);
  return "ss2";
}

const message2 = importAction2("Saurabh", function (msg) {
  console.log(msg);
});
console.log(message2);
console.log("Stop");

// Q.3 Guess the output

console.log("Start3");
const sub = new Promise((resolve, reject) => {
  console.log("Intermediate 3");
  setTimeout(() => {
    const result = true;
    if (result) resolve("Resolved3");
    else reject(new Error("Rejected3"));
  }, 200);
});

sub
  .then((res) => {
    console.log("O3 then=>", res);
  })
  .catch((err) => {
    console.log("O3 catch=>", err);
  });
console.log("Stop3");

// Q.4 Guess the Output

console.log("Stert4");
Promise.resolve("Resolved4").then((res) => {
  console.log("Resolved4 then=>", res);
});
console.log("Stop4");

// Q.5 Guess the output

console.log("Start5");
const pi5 = new Promise((resolve, reject) => {
  console.log("P5 inside");
  resolve("P5 resolved");
});
pi5
  .then((res) => {
    console.log("O5 then=>", res);
  })
  .catch((err) => {
    console.log("O5 catch=>", err);
  });
console.log("Stop5");

// Q.6 Guess the Output

console.log("Start6");
const pi6 = new Promise((resolve, reject) => {
  console.log("P6 inside 1");
  resolve("O6 resolved");
  console.log("P6 inside 2");
});

pi6
  .then((res) => {
    console.log("P6 then=>", res);
  })
  .catch((err) => {
    console.log("P6 Catch=>", err);
  });

console.log("Stop 6");

// Q.7  Guess the output

console.log("Start7");
const fun = () =>
  new Promise((resolve, reject) => {
    console.log("P7 inside");
    resolve("Success");
  });

console.log("P7 Middle");
fun().then((res) => {
  console.log("P7 then=>", res);
});

console.log("End");

// Q.8 Guess the Output

function job() {
  return new Promise((resolve, reject) => {
    reject();
  });
}

const pi8 = job();
pi8
  .then(() => {
    console.log("P8 Success 1");
  })
  .then(() => {
    console.log("P8 Success 2");
  })
  .then(() => {
    console.log(" P8 Sucess 3 ");
  })
  .catch(() => {
    console.log("P8 Error 1");
  })
  .then(() => {
    console.log("P8 Success 4");
  });
