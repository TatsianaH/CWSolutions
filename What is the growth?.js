//https://www.codewars.com/kata/5a21f228781b16d0bc00039d/train/javascript

function getGrowth(...args) {
  let res = `${args[0]} (+0, +0%),`;
  for (let i = 1; i < args.length; i++) {
    res += ` ${args[i]} (`;
    if (args[i] >= args[i - 1]) {
      res += '+';
    }
    let num = args[i] - args[i - 1];
    res += `${Math.round(num)}, `;
    if (args[i] >= args[i - 1]) {
      res += '+';
    }
    let num2 = args[i] * 100 / args[i - 1] - 100;
    res += `${Math.round(num2)}%),`;
  }
  return res.slice(0, -1);
}