// https://www.codewars.com/kata/5dd259444228280032b1ed2a/train/javascript

function solve(s,g){
    const n = s - g;
    if(n % g === 0) return [g, n].sort((a, b) => a - b);
    return -1;
}

// 2 case

function solve(s,g){
    const n = s - g;
    if(n % g === 0) return g > n ? [n, g] : [g, n];
    return -1;
}