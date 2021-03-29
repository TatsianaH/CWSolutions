// https://www.codewars.com/kata/58305403aeb69a460b00019a/train/javascript

function reverseAndMirror(s1,s2) {
    s2 = s2.split('').map(el => el.toLowerCase() === el ? el.toUpperCase() : el.toLowerCase()).reverse().join('');
    s1 = s1.split('').map(el => el.toLowerCase() === el ? el.toUpperCase() : el.toLowerCase()).reverse().join('');
    const temp = s1.split('').reverse().join('');
    return s2 + '@@@' + s1 + temp;
}