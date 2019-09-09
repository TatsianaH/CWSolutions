//Cat and Mouse - Harder Version
//https://www.codewars.com/kata/57ee2a1b7b45efcf700001bf/train/javascript]

function catMouse(x, j) {
  if (!x.includes('m') || !x.includes('C') || !x.includes('D'))
    return 'boring without all three';
  let numC = x.indexOf('C');
  let numM = x.indexOf('m');
  let numD = x.indexOf('D');
  let res = '';
  if (numC > numM) {
    if (numD < numC && numD > numM && numM > numC - j - 1) {
      res = 'Protected!';
    } else if (numM > numC - j - 1) {
      res = 'Caught!';
    } else {
      res = 'Escaped!';
    }
  } else if (numC < numM) {
    if (numD > numC && numD < numM && numM < numC + j + 1) {
      res = 'Protected!';
    }  else if (numM < numC + j + 1) {
      res = 'Caught!';
    } else {
      res = 'Escaped!';
    }
  }
  return res;
}

// 2 case

function catMouse(x, j) {
  let numC = x.indexOf('C');
  let numM = x.indexOf('m');
  let numD = x.indexOf('D');
  let res = '';
  if (numC === -1 || numM === -1 || numD === -1)
    return 'boring without all three';
  if (numC > numM) {
    if (numD < numC && numD > numM && numM > numC - j - 1) {
      res = 'Protected!';
    } else if (numM > numC - j - 1) {
      res = 'Caught!';
    } else {
      res = 'Escaped!';
    }
  } else if (numC < numM) {
    if (numD > numC && numD < numM && numM < numC + j + 1) {
      res = 'Protected!';
    }  else if (numM < numC + j + 1) {
      res = 'Caught!';
    } else {
      res = 'Escaped!';
    }
  }
  return res;
}
