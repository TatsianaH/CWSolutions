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
