// https://www.codewars.com/kata/5b752a42b11814b09c00005d/train/javascript

function solve(a,b){
    if(a === 0 || b === 0) return [a, b];
    if(a >= 2 * b){
        while (a !== 0 || b !== 0){
            a = a - 2 * b;
            return solve(a, b)
        }
    }
    if (b >= 2 * a){
        while (a !== 0 || b !== 0){
            b = b - 2 * a;
            return solve(a, b);
        }
    }
    return [a, b];
}