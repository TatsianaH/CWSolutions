// https://www.codewars.com/kata/570bcd9715944a2c8e000009/train/javascript

function sc(floor){
    return (floor <= 6 && floor >= 2) ? 'Aa~ '.repeat(floor - 1) + 'Pa! Aa!' : (floor <= 1) ? '' : 'Aa~ '.repeat(floor - 1) + 'Pa!';
}