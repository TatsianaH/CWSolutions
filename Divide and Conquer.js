// https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript

function divCon(x){
    const num = x.filter(el => typeof el === 'number').reduce((acc, curr) => acc + curr, 0);
    const str = x.filter(el => typeof el === 'string').reduce((acc, curr) => acc + +curr, 0);
    return num - str;
}