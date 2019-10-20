//https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

  function nbYear(p0, percent, aug, p) {
    let count = 0;
    let sum = p0;
    while (sum <= p) {
      sum += sum * (percent / 100) + aug;
      count++;
      if (sum >= p) break;
    }
    return count;
  }
