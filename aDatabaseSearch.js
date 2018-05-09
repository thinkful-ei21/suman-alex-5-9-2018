'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr,query){
  return arr.find(hero => checkEachKeyValPair(hero,query));
}

function checkEachKeyValPair(hero,query){  
  let count =0;
  for(let i =0 ;i < Object.keys(query).length; i++){
    let key = Object.keys(query)[i];
    if(query[key] === hero[key])
      count++;
  }
  if(count === Object.keys(query).length)
    return hero;
}

console.log(findOne(HEROES,{ id: 5, squad: 'Justice League' }));