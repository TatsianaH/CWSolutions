//https://www.codewars.com/kata/credit-card-mask/train/javascript

  function maskify(cc) {
    if(cc.length <= 4) return cc;
    return cc.slice(0, cc.length - 4).replace(/\w/g, '#') + cc.slice(-4);
  }