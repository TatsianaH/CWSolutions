// https://www.codewars.com/kata/adding-big-numbers/train/javascript

function add(a, b) {
    return (Number(a) >= Number.MAX_SAFE_INTEGER || Number(b)>= Number.MAX_SAFE_INTEGER) ?
        bigInt(a, b) : (a * 1 + b * 1) + '';
    function bigInt(a, b){
        let res = '';
        let num = 0;
        let beginnig = new Array((Math.abs(a.length - b.length)+ 1)).join('0');
        a.length >= b.length ? b = beginnig + b : a = beginnig + a;
        for(let i = a.length - 1; i >= 0; i--){
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