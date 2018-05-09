'use strict';
let message = 'craft block argon meter bells brown croon droop';
function decode(word){    
  let obj = {a : 2, b : 3, c :4,d :5};     
  switch(word[0]){
  case 'a':
    return word[obj.a -1];      
  case 'b':
    return word[obj.b -1];      
  case 'c':
    return word[obj.c -1];      
  case 'd':
    return word[obj.d -1];      
  default:
    return ' ';
  }    
}
function decodeWords(message){  
  // return message.split(' ').map(word => {
  //   return decode(word);    
  // }).join('');  
  return message.split(' ').reduce((acc,word) =>{
    return acc += decode(word);
  },'');
}

console.log(decodeWords(message));