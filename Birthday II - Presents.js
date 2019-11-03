//codewars.com/kata/5805f0663f1f9c49be00011f/train/javascript

function present(x, y) {
  if (x === 'empty') return 'empty';
  if (x === 'crap') return x.split('').sort().join('');
  if (x === 'badpresent') return 'Take this back!';
  if (x === 'dog') return `pass out from excitement ${y} times`;
  if (x === 'goodpresent') {
    let str = [];
    for (let i = 0; i < x.length; i++) {
      str.push(x[i].charCodeAt(0) + y);
    }

    let res = String.fromCharCode(...str);
    return res;
  }
  if (x === 'bang') {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      sum += x[i].charCodeAt(0);
    }
    sum = sum - y * x.length
    return sum;
  }
}
