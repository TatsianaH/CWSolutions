//https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript

  function partsSums(ls) {
    const arr = [];
    let num = ls.reduce((acc, curr) => acc + curr, 0);
    arr.push(num);
    ls.reverse();
    let n = ls.length;
    for (let i = 0; i < n; i++) {
      num = num - ls.pop();
      arr.push(num);
    }
    return arr;
  }