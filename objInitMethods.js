'use strict';
/*
const loaf = {flour: 300, water: 210};
console.log(`${loaf.flour} ${loaf.water}`);
loaf.hydration = function(){return (this.water/this.flour)*100;};
console.log(loaf.hydration());
*/
/*******************************************************************/
/*
const obj = {foo : 'foo',
  bar : 'bar',
  fum : 'fum',
  quux: 'quux',
  spam: 'spam',
};

for(let key in obj){
  console.log(`${key} and value is ${obj[key]}`);
}
*/
/*
let mealsObject = {meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],};

console.log(mealsObject.meals[3]);
*/

function employee(name,jobTitle){
  let obj = {name: name, jobTitle: jobTitle};
  return obj;
}

const arrayOfPeople = [
  employee('bandita','software developer'),
  employee('Alex','Game tester'),
  employee('Suman','Student'),
  employee('Rich','Mentor'),
  employee('Ali','Mentor'),  
];

employee.prototype.boss = null;
arrayOfPeople[0].boss = 'Alex';
arrayOfPeople[1].boss = 'Suman';
arrayOfPeople[2].boss = 'Rich';
arrayOfPeople[3].boss = 'Ali';
// console.log(arrayOfPeople[0].boss = 'Alex');
// console.log(arrayOfPeople[0]);
let messageStr;

arrayOfPeople.forEach(person => {
  if(person.boss !== undefined){
    messageStr = `reports to ${person.boss}`;
  }
  else{
    messageStr = 'doesn\'t report to anybody';
  }
  console.log(`${person.name} is a ${person.jobTitle} ${messageStr}`);
});

