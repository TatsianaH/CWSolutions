// https://www.codewars.com/kata/557cffec8c3e8e55cc00010f/train/javascript

function countZeros(n) {
    let str = '';
    let count = 0;
    for(let i = 10; i <= n; i++){
        str += i;
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] === '0') count++;
    }
    return count;
}