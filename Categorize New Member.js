// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

function openOrSenior(data){
    return data.map((el, i) => el[0] >= 55 && el[1] > 7 ? 'Senior' : 'Open');
}