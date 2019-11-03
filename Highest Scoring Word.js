//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

  function high(x) {
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    const word = x.split(' ');
    const arr = [];
    for (let i = 0; i < word.length; i++) {
      let el = 0;
      for (let j = 0; j < word[i].length; j++) {
        el += alph.indexOf(word[i][j]);
      }
      arr.push(el)
    }
    let max = arr[0];
    let index;
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    index = arr.indexOf(max);
    return word[index];
  }
