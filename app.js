const os = require('os');
const fs = require('fs');

console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());
console.log('userInfo: ', os.userInfo());

const genders = ['M', 'F'];
const maleNames = ['John', 'Adam', 'Anthony', 'Derek'];
const femaleNames = ['Kate', 'Laura', 'Clara', 'Julia'];
const lastNames = ['Williams', 'Smith', 'Garcia', 'Davis'];
const ages = [23, 19, 33, 38];
let people = [];

const randChoice = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

for (let i = 0; i < 20; i++) {
  const gender = randChoice(genders);
  const maleName = randChoice(maleNames);
  const femaleName = randChoice(femaleNames);
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const age = ages[Math.floor(Math.random() * ages.length)];
  
  if (gender === 'M') {
    people.push(gender, maleName, lastName, age);
  } else {
    people.push(gender, femaleName, lastName, age);
  } 
};

const peopleJson = JSON.stringify(people);

fs.writeFile('people.json', peopleJson, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});