//https://www.codewars.com/kata/53e895e28f9e66a56900011a/train/javascript

function letterFrequency(text){
  let t = text.toLowerCase().replace(/[^a-z]/g, '');
  let obj = {};
  for (let i = 0; i < t.length; i++){
    if(obj[t[i]]){
      obj[t[i]] += 1;
    } else {
      obj[t[i]] = 1;
    }
  }
  let arr = Object.entries(obj);
  arr.sort((a, b) => b[1] - a[1]);
  for(let i = 0; i < arr.length - 1; i++){
    for(let j = 0; j < arr.length - 1 - i; j++){
      if(arr[j][1] === arr[j + 1][1]){
        if(arr[j][0] > arr[j + 1][0]){
          let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
      }
    }
  }
  return arr;
}