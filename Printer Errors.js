//https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

  function printerError(s) {
    let count = 0;
    let alph = 'nopqrstuvwxyz';
    for(let i = 0; i < s.length; i++){
      if(alph.includes(s[i])) count++;
    }
    return `${count}/${s.length}`;
  }

