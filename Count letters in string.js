//https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/javascript

function letterCount(s){
  let obj = {};
  for(let i = 0; i < s.length; i++){
    if(obj[s[i]]){
      obj[s[i]] += 1;
    } else {
      obj[s[i]] = 1;
    }
  }
  return obj;
}