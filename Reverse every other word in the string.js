// https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript

function reverse(str){
  let str2= str.trim().replace(/\s+/, ' ');
  let arr = str2.split(' ');
  for(let i = 0; i < arr.length; i++){
    if(i % 2){
      arr[i] = arr[i].split('').reverse().join('');
    }
  }
  return arr.join(' ');
}