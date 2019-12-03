// https://www.codewars.com/kata/find-the-duplicated-number-in-a-consecutive-unsorted-list/train/javascript

function findDup( arr ){
    let duplicateValue = arr.filter((el, i) => i === arr.indexOf(el) && i !== arr.lastIndexOf(el));
    return +duplicateValue;
}