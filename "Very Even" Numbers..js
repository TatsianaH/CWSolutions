// https://www.codewars.com/kata/58c9322bedb4235468000019/train/javascript

function isVeryEvenNumber(n) {
    let num = n.toString().split('').map(el => +el).reduce((a, b) => a + b, 0);
    while (num > 9){
        num = num.toString().split('').map(el => +el).reduce((a, b) => a + b, 0);
    }
    if(num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

