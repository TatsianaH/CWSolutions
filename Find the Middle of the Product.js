// https://www.codewars.com/kata/5ac54bcbb925d9b437000001/solutions/javascript

function findMiddle(str){
    if(typeof str !== 'string') return -1;
    let num = str.match(/[0-9]/g);
    let res;
    if(num){
        num = num.reduce((a, b) => a * b, 1).toString();
        if(num.length % 2 === 1){
            res = num[Math.floor(num.length/2)];
        } else {
            res = num.slice(num.length/2 - 1, num.length/2 + 1);
        }
    } else {
        return -1;
    }
    return +res;
}