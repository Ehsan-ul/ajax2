// Callback Function and Higher Order Function
// If any function received another function as its argument, the function is called Higher Order Function
//and that argument (function) is called Callback function

// =================== example 1
function square(x) {
  console.log(`Square of ${x} is ${x * x}`);
}

function higherOrderFunction(num, callback) {
  callback(num);
}

higherOrderFunction(3, square);

// ====================  example 2
const task1 = (callback) => {
  console.log('Task 1');
  callback();
};
const task2 = (callback) => {
  setTimeout(() => {
    console.log('Task 2: data loading.');
    callback();
  }, 3000);
};
const task3 = (callback) => {
  console.log('Task 3');
  callback();
};
const task4 = (callback) => {
  console.log('Task 4');
  callback();
};
const task5 = () => {
  console.log('Task 5');
};

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5();
      });
    });
  });
});
