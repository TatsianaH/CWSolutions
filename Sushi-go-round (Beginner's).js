// https://www.codewars.com/kata/59619e4609868dd923000041/train/javascript

function totalBill(str) {
    str = str.replace(/ /g, '').split('');
    let count = 0;
    for(let i = 1; i <= str.length; i++){
        if(str[i - 1] == 'r' && i % 5 !== 0 && i !== 0) count++;
    }
    return count * 2;
}