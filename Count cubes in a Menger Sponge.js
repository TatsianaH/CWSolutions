// https://www.codewars.com/kata/59d28768a25c8c51a6000057/train/javascript

function calc_ms(n) {
    let cubes = 1;
    for(let i = 1; i <= n; i++){
        cubes = cubes * 20;
    }
    return cubes;
}