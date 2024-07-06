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
    resolve("P1");
  }, 100);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    setTimeout(() => {
      resolve("P2");
    }, 2000);
  });
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("P3");
    resolve("P3");
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
    console.log("Promise AllSettled =>", res);
  })
  .catch((err) => {
    console.log("Promise all Settled =>", err);
  });
