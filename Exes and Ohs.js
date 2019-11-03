//https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

  function XO(str) {
    let x = 0;
    let o = 0;
    for(let i = 0; i < str.length; i++){
      str = str.toLowerCase();
    if(str[i] === 'x') x++;
    if(str[i] === 'o') o++;
    }
    return x === o;
  }