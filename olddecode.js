'use strict';
let message = 'craft block argon meter bells brown croon droop';
function decode(message){  
  let words = message.split(' ');
  let result = [];  
  for(let i=0; i < words.length;i++){    
    switch(words[i].split('')[0]){
    case 'a':
      result.push(words[i].split('')[1]);
      break;
    case 'b':
      result.push(words[i].split('')[2]);
      break;
    case 'c':
      result.push(words[i].split('')[3]);
      break;
    case 'd':
      result.push(words[i].split('')[4]);
      break;
    default:
      result.push(' ');
    }
  }
  console.log(result.join(''));
}
decode(message);