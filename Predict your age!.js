// https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript

function predictAge(...args){
    return Math.floor(Math.sqrt(args.map(el => el * el).reduce((a, b) => a + b, 0)) / 2);
}

// 2 variant

const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;