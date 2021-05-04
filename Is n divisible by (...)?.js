// https://www.codewars.com/kata/558ee8415872565824000007/train/javascript

function isDivisible(n, ...args){
    for(let i = 0; i < args.length; i++){
        if(n % args[i] !== 0) return false;
    }
    return true;
}
