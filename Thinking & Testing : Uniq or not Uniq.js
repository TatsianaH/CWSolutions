// https://www.codewars.com/kata/56d949281b5fdc7666000004/train/javascript

function testit(a,b){
    let a1 = a.filter((el, i) => i === a.indexOf(el));
    let a2 = b.filter((el, i) => i === b.indexOf(el))
    return a1.concat(a2).sort((a, b) => a - b);
}