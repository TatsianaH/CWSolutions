// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript

function add(n){
    const sum = (y) => add(n + y);
    sum.valueOf = () => n;
    return sum;
}

