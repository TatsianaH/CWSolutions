// https://www.codewars.com/kata/5800b6568f7ddad2c10000ae/train/javascript

function simplify(n){
    let num = n.toString();
    let res = '';
    for(let i = 0; i < num.length; i++){
        if(num[i] === '0') continue;
        if(i === num.length - 1){
            res += num[i];
        } else {
            res += `${num[i]}*1${'0'.repeat(num.length - 1 - i)}+`;
        }
    }
    return res[res.length - 1] !== '+'? res : res.slice(0, -1);
}