console.log('Welcome!');

const task1 = () => {
  return new Promise((resolve, rejecct) => {
    resolve('Task1 is  completed');
    // rejecct('Task1 is not completed');
  });
};

const task2 = () => {
  return new Promise((resolve, rejecct) => {
    setTimeout(() => {
      resolve('Task2 is completed...... Loaded');
    }, 2000);
  });
};
const task3 = () => {
  return new Promise((resolve, rejecct) => {
    resolve('Task3 is completed');
  });
};

const task4 = () => {
  return new Promise((resolve, rejecct) => {
    resolve('Task4 is completed');
  });
};

// task1()
//   .then((res) => {
//     console.log(res);
//   })
//   .then(task2)
//   .then((res) => {
//     console.log(res);
//   })
//   .then(task3)
//   .then((res) => {
//     console.log(res);
//   })
//   .then(task4)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// async function callAllTask() {}
const callAllTask = async () => {
  try {
    const t1 = await task1();
    console.log(t1);

    const t2 = await task2();
    console.log(t2);

    const t3 = await task3();
    console.log(t3);

    const t4 = await task4();
    console.log(t4);
  } catch (e) {
    console.log(e);
  }
};
callAllTask();

console.log('Bye!');
