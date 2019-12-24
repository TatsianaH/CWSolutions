// https://www.codewars.com/kata/5832db03d5bafb7d96000107/train/javascript

function lottery(str){
    str = str.replace(/[a-z]/gi, '').split('');
    let arr = str.filter((el, i) => i === str.indexOf(el)).join('');
    return !arr ? "One more run!" : arr;
}