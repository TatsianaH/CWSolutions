// https://www.codewars.com/kata/58ebfa6ef7cda1a3d4000048/train/javascript

function holycats(input){
    const arr = input.filter(el => el !== 'wicked' && el !== 'normal');
    return arr.length === 0 ? [] : arr;
}