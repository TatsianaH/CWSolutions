// https://www.codewars.com/kata/5b097da6c3323ac067000036/train/javascript

function solve(a, b) {
    let s1 = 0;
    let s2 = 0;
    if (a[0] > b[0]) s1++;
    else if (a[0] < b[0]) s2++;
    if (a[1] > b[1]) s1++;
    else if (a[1] < b[1]) s2++;
    if (a[2] > b[2]) s1++;
    else if (a[2] < b[2]) s2++;
    if (s1 > s2) return `${s1}, ${s2}: Alice made "Kurt" proud!`;
    else if(s2 > s1) return `${s1}, ${s2}: Bob made "Jeff" proud!`;
    else return `${s1}, ${s2}: that looks like a "draw"! Rock on!`;
}