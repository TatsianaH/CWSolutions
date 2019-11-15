//https://www.codewars.com/kata/5a4d303f880385399b000001/train/javascript

function strong(n) {
    let res = 0;
    let num = n.toString().split('').map(Number);
    for(let i = 0; i < num.length; i++){
        let mult = 1;
        for(let j = 1; j <= num[i]; j++ ){
            mult *= j;
        }
        res += mult;
    }
    return res === n ? "STRONG!!!!" : "Not Strong !!" ;
}