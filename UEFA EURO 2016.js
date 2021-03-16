// https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript

function uefaEuro2016(t, s){
    if(s[0] === s[1]) return `At match ${t[0]} - ${t[1]}, teams played draw.`;
    const max = Math.max(...s);
    const winner = s.indexOf(max);
    return `At match ${t[0]} - ${t[1]}, ${t[winner]} won!`;
}