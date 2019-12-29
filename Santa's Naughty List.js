// https://www.codewars.com/kata/santas-naughty-list/train/javascript

function findChildren(s, c) {
    let arr = c.filter(el => s.includes(el));
    return arr.filter((el, i) => i === arr.indexOf(el)).sort();;
}