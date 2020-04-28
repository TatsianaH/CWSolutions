// https://www.codewars.com/kata/sum-strings-as-numbers/train/javascript

function sumStrings(a,b) {
    return (+a >= Number.MAX_SAFE_INTEGER || +b >= Number.MAX_SAFE_INTEGER) ?
        bigInt(a,b) : (a * 1 + b * 1) + '';
    function bigInt(a,b){
        let res = '';
        let num = 0;
        let arr = new Array((Math.abs(a.length - b.length)) + 1).join('0');
        a.length >= b.length ? b = arr + b : a = arr + a;
        for(let i = b.length - 1; i >= 0; i--){
            let sum = a[i] * 1 + b[i] * 1 + num;
            if(sum >= 10){
                sum = sum - 10;
                num = 1;
            } else {
                num = 0;
            }
            res = sum.toString() + res;
        }
        return num > 0 ? num + res : res;
    }
}