// https://www.codewars.com/kata/57ad85bb7cb1f3ae7c000039/train/javascript

function numbersWithDigitInside(x, d) {
    let nums = [];
    for(let i = 1; i <= x; i++){
        if(i.toString().includes(d.toString())) nums.push(i);
    }
    if(nums.length > 0){
        const count = nums.length;
        const sum = nums.reduce((a, b) => a + b, 0);
        const prod = nums.reduce((a, b) => a * b, 1);
        return [count, sum, prod];
    }
    return [0, 0, 0];
}