// https://www.codewars.com/kata/sum-of-numerous-arguments/train/javascript

function findSum(...args){
    if(args.length === 0) return 0;
    if(args.some(el => el < 0)) return -1;
    return args.reduce((a, b) => a + b, 0);
}