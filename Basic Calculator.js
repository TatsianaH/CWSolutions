// https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/train/javascript

function calculate(num1, op, num2) {
    switch(op){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if(num2 === 0) return null;
            return num1 / num2;
        default:
            return null;
    }
}