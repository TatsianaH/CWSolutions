//https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

  function maskify(cc) {
    const arr = cc.split('');
    for(let i = 0; i < arr.length - 4; i++){
      arr[i] = '#';
    }
    return arr.join('');
    }