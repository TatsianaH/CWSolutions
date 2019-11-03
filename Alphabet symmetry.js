//https://www.codewars.com/kata/alphabet-symmetry/train/javascript

  function solve(arr){
    let str = 'abcdefghijklmnopqrstuvwxyz';
    return arr.map(el => el.toLowerCase().split('').filter((e, i) => i === str.indexOf(e)).length);
  }