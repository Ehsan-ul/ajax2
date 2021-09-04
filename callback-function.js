// Callback Function

/*
setTimeout(function () {
  console.log('Hello World!');
}, 3000);
*/

let person = [
  { firstName: 'Ehsanul', lastName: 'Islam' },
  { firstName: 'Nasir', lastName: 'Uddin' },
];

function newPerson(p, callback) {
  setTimeout(function () {
    person.push(p);
    callback();
  }, 3000);
}

function getData() {
  setTimeout(function () {
    let nameList = '';
    person.forEach(function (item) {
      nameList += `<li>${item.firstName} ${item.lastName}</li>`;
    });
    document.getElementById('output').innerHTML = nameList;
  }, 1000);
}

newPerson({ firstName: 'Ansarullah', lastName: 'Maruf' }, getData);
