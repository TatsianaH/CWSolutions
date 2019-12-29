// https://www.codewars.com/kata/simple-fun-number-258-is-divisible-by-6/train/javascript

function isDivisibleBy6(s) {
    let arr = [];
    for(let i = 0; i <= 9; i++){
        let str = s.replace('*', i);
        let sum = str.split('').reduce((a, b) => a + +b, 0);
        if(str[str.length - 1] % 2 === 0 && sum % 3 === 0) arr.push(str);
    }
    return arr;
}