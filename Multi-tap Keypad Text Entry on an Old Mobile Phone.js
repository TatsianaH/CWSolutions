// https://www.codewars.com/kata/54a2e93b22d236498400134b/train/javascript

function presses(phrase) {
  let str1 = 'adgjmptw *#1';
  let str2 = 'behknqux0';
  let str3 = 'cfilorvy';
  let str4 = 'sz234568';
  let str5 = '79'
  let sum = 0;
  const arr = phrase.toLowerCase().split('');
  for(let i = 0; i < arr.length; i++){
    if(str1.includes(arr[i])){
      sum += 1;
    }
    if(str2.includes(arr[i])){
      sum += 2;
    }
    if(str3.includes(arr[i])){
      sum += 3;
    }
    if(str4.includes(arr[i])){
      sum += 4;
    }
    if(str5.includes(arr[i])){
      sum += 5;
    }
    }
    return sum;
}