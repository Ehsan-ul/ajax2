console.log('Welcome');

let promise1 = new Promise((resolve, reject) => {
  let completePromise = 0;
  if (completePromise) {
    resolve('Complete Promise 1');
  } else {
    reject('Not Complete Prommise 1');
    // reject(new Error('ERROR Found!'))
  }
});

// console.log(promise1)
promise1
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log('Bye');

// =========== all promise call: methd-1
// Promise.all([promise1, promsie2]).then((res) => {
//   console.log(res);
// });

// =========== all promise call: methd-2
// Promise.all([promise1, promsie2]).then(([res1, res2]) => {
//   console.log(res1, res2);
// });

// ============== all promsie race
// onk gulo promise theke j promise ta age resolved hobe takei only dekhabe
// Promise.race([promise1, promsie2]).then(([res]) => {
//   console.log(res);
// });
