//https://www.codewars.com/kata/sort-the-odd/train/javascript

  function sortArray(arr) {
    const arrOdd = arr.filter(el => el % 2).sort((a,b) => a - b);
    return arr.map(el => el % 2 ? arrOdd.shift() : el);
  }