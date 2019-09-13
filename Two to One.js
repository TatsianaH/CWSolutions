//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

  function longest(s1, s2) {
    let str = s1 + s2;
    return str.split('').filter((el, i) =>  i === str.lastIndexOf(el)).sort().join('');
    // your code
  }