// https://www.codewars.com/kata/57f7b8271e3d9283300000b4/train/javascript


function evenOrOdd(str) {
    const odd = str.split('').map(el => +el).filter(num => num % 2 === 1).reduce((a, b) => a + b, 0);
    const even = str.split('').map(el => +el).filter(num => num % 2 === 0).reduce((a, b) => a + b, 0);
    if(odd < even) return 'Even is greater than Odd';
    else if(even < odd) return 'Odd is greater than Even';
    else return 'Even and Odd are the same';
}