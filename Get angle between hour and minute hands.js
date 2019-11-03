//https://www.codewars.com/kata/582f70bcfd25e93719000371/train/javascript

  function getAngle(t) {
    let arr = t.split(':');
    if (arr.length <= 1) return 'Invalid input';
    if (isNaN(+arr[0]) || arr[0] > 24) return 'Invalid input';
    if (isNaN(+arr[1]) || arr[1] > 59) return 'Invalid input';
    const arr2 = arr.map(el => +el);
    let nH = 360 / 12 / 60; // 0.5 degrees per 1 min hour hand makes
    let nM = 360 / 60; // 6 degrees per 1 min min hand makes
    let m = nM * arr2[1];
    let h = 0;
    if (arr2[0] >= 12) {
      arr2[0] = arr2[0] - 12;
    }
    if (arr2[0] === 0 || arr2[0] === 12) {
      h = 0;
    }
    if (arr2[1] === 60) {
      m = 0;
    }
    h = (arr2[0] * 60 + arr2[1]) * nH;
    let res = Math.abs(h - m);
    if(res > 180){
      res = 360 - res;
    }
    return res;
  }