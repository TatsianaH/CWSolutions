// https://www.codewars.com/kata/basic-mathematical-operations/train/javascript

function basicOp(o, v1, v2){
    switch(o){
        case '+':
            return v1 + v2;
            break;
        case '-':
            return v1 - v2;
            break;a
        case '*':
            return v1 * v2;
            break;
        default:
            return v1 / v2;
    }
}