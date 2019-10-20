//https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript*

  function sumDigPow(a, b) {
    const arr = [];
    for (let i = a; i <= b; i++) {
      let sum = 0;
      for (let j = 0; j <= i.toString().length; j++) {
        sum += Math.pow(parseInt(i.toString()[j]), j + 1);
        if (sum === i) arr.push(i);
      }
    }
    return arr;
  }