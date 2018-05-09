'use strict';
const loaf = {flour: 300, water: 210};
console.log(`${loaf.flour} ${loaf.water}`);
loaf.hydration = function(){return (this.water/this.flour)*100;};
console.log(loaf.hydration());

/*******************************************************************/
const obj = {foo : 'foo',
  bar : 'bar',
  fum : 'fum',
  quux: 'quux',
  spam: 'spam',
};

for(let key in obj){
  console.log(`${key} and value is ${obj[key]}`);
}