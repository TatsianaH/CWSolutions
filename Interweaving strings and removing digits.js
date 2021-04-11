// https://www.codewars.com/kata/588a7d45019c42be61000009/train/javascript

function interweave(s1, s2) {
    let max = s1.length + s2.length;
    s1 = s1.split('');
    s2 = s2.split('');
    let res = [];
    for(let i = 0; i < max; i++){
        if(i % 2 === 0) res.push(s1.shift());
        else res.push(s2.shift());
    }
    return res.join('').replace(/[0-9]/g, '');
}
