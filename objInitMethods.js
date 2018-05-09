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
const arrayOfPeople = [
  {name:'Alex' ,jobTitle :'Game tester'},
  {name:'Suman' ,jobTitle :'Student'},
  {name:'Rich' ,jobTitle :'Mentor'},
  {name:'Ali' ,jobTitle :'TA'},
  {name:'Chris' ,jobTitle :'TA'},
];

arrayOfPeople.forEach(person => {
  console.log(`${person.name} is a ${person.jobTitle}`);
});
