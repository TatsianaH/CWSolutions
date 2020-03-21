//https://www.codewars.com/kata/5e4217e476126b000170489b/train/javascript

function polydivisible(x) {
    const num = x.toString();
    for(let i = 1; i <= num.length; i++){
        if(+num.slice(0, i) % i) return false;
    }
    return true;
}