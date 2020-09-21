//https://www.codewars.com/kata/check-three-and-two/train/javascript

function checkThreeAndTwo(array) {
  const a = array.filter(el=> el === 'a').length;
  const b = array.filter(el=> el === 'b').length;
  const c = array.filter(el=> el === 'c').length;
    if(a === 2 && b === 3) return true;
    if(a === 3 && b === 2) return true;
    if(b === 2 && c === 3) return true;
    if(a === 2 && c === 3) return true;
    if(a === 3 && c === 2) return true;
    if(b === 3 && c === 2) return true;
    if(b === 2 && c === 3) return true;
 return false;
}

// 2 case

function checkThreeAndTwo(array) {
  let obj = {};
  for (let l of array) {
    if (obj[l]) obj[l] += 1;
    else obj[l] = 1;
  }
  const values = Object.values(obj);
  return values.includes(2) && values.includes(3);
}

// 3 case

function checkThreeAndTwo(array) {
  let obj = {};
  for(let l of array){
    if(obj[l]) obj[l] += 1;
    else obj[l] = 1;
  }
  let count = [];
  for(let key in obj){
    if (obj[key] === 2 || obj[key] === 3){
      if(!count.includes(obj[key])) count.push(obj[key])
    };
  }
  return count.length === 2;
}