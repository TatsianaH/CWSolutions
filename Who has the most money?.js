// https://www.codewars.com/kata/528d36d7cc451cd7e4000339/train/javascript

function mostMoney(students) {
    if(students.length === 1) return students[0].name;
    let arr = students.map(el => el.fives * 5 + el.tens * 10 + el.twenties * 20);
    let max = Math.max(...arr);
    if(arr.every(el => el === max)){
        return 'all';
    } else {
        let ind = arr.indexOf(max);
        return students[ind].name;
    }
}
