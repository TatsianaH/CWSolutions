// https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript

function calculator(a,b,sign){
    let res;
    if (typeof a !== 'number' || typeof b !== 'number') return 'unknown value';
    switch(sign){
        case '+':
            res = a + b;
            break;
        case '-':
            res = a - b;
            break;
        case '*':
            res = a * b;
            break;
        case '/':
            res = a / b;
            break;
        default:
            res = 'unknown value';
            break;
    }
    return res;
}