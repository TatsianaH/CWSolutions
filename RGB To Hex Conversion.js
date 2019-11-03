//https://www.codewars.com/kata/rgb-to-hex-conversion/train/javascript

  function rgb(r, g, b) {
    let trans = function (n) {
      let num = n.toString(16);
      if (n >= 255) num = 'FF';
      if(n <= 0) num = '00';
      return (num.length === 1) ? ('0' + num) : num;
      }
    return (trans(r) + trans(g) + trans(b)).toUpperCase();
  }