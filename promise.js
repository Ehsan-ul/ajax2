let personName = [
  { firstName: 'Tasnim', lastName: 'Mumu' },
  { firstName: 'Ehsanul', lastName: 'Sajjad' },
];

function createPerson(p) {
  let prom = new Promise(function (resolve, reject) {
    personName.push(p);

    let err = false;
    if (err != true) {
      resolve();
    } else {
      reject('Data Error!');
    }
  });
  return prom;
}

function getData() {
  let nameList = '';
  personName.forEach(function (item) {
    nameList += `<li>${item.firstName} ${item.lastName}</li>`;
  });
  document.getElementById('promiseOutput').innerHTML = nameList;
}

createPerson({ firstName: 'Tissue Bintay', lastName: 'Ehsan' })
  .then(getData)
  .catch((e) => {
    console.log(e);
    document.getElementById('promiseOutput').innerHTML =
      '<b>Data Not Found!</b>';
    document.getElementById('promiseOutput').style.color = 'red';
  });
