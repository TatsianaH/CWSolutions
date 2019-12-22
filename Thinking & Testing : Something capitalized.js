// https://www.codewars.com/kata/thinking-and-testing-something-capitalized/train/javascript

function testit(s) {
    if (s === '') return s;
    else if (s.length === 1) return s.toUpperCase();
    else {
        s = s.split(' ');
        for (let i = 0; i < s.length; i++) {
            if (s[i].length === 1) s[i] = s[i].toUpperCase();
            else {
                s[i] = s[i].split('');
                s[i][s[i].length - 1] = s[i][s[i].length - 1].toUpperCase();
                s[i] = s[i].join('');
            }
        }
    }
    return s.join(' ');
}


// 2 case

function testit(s){
    if(s === '') return s;
    if(s.length === 1) return s.toUpperCase();
    let str = '';
    for(let i = 0; i < s.length; i++){
        if (i === s.length - 1) str += s[i].toUpperCase();
        else if(s[i] !== ' ' && s[i + 1] === ' ') str += s[i].toUpperCase();
        else if(s[i] !== ' ' && s[i + 1] !== ' ') str += s[i];
        else if(s[i] === ' ') str += s[i];
    }
    return str;
}

// 3 case

function testit(s){
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i + 1] === ' ' || i === s.length - 1) {
            res += s[i].toUpperCase();
        } else {
            res += s[i];
        }
    } return res;
}