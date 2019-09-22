//https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript

  function list(names){
    let str = '';
    const arr = names.map(el => Object.values(el)[0]);
    if(arr.length === 0){
      return '';
    }
    if (arr.length === 1){
      return arr[0];
    }
    if(arr.length >= 2){
      for(let i = 0; i < arr.length; i++){
        if (i === arr.length - 1){
          str += ' & ';
        }
        if(i === arr.length - 2 || arr[i] === arr[arr.length - 1]){
          str += arr[i];
        } else {
          str += arr[i] + ', '
        }
      }
    }
    return str;
  }
