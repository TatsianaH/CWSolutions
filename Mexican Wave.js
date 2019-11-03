//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

  function wave(n){
    if(n === ''){
      return [];
    }
    const arr = [];
    const arr2 = n.toLowerCase().split('');
    for(let i = 0; i < arr2.length; i++){
      if(arr2[i] === ' ') continue;
        arr2[i] = arr2[i].toUpperCase();
        arr.push(arr2.join(''));
        arr2[i]= arr2[i].toLowerCase();
      }
    return arr;
  }