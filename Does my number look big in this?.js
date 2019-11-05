//https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

  function narcissistic(value) {
    const arr = value.toString().split('').map(el => +el);
    let res = arr.map(el => Math.pow(el, arr.length)).reduce((acc, curr) => acc + curr, 0);
    return res === value;
  }
