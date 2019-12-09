// https://www.codewars.com/kata/coding-meetup-number-5-higher-order-functions-series-prepare-the-count-of-languages/train/javascript

function countLanguages(list) {
    const obj = {};
    for(let i = 0; i < list.length; i++){
        if(!obj[list[i].language]) obj[list[i].language] = 1;
        else obj[list[i].language] += 1;
    }
    return obj;
}