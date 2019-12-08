//https://www.codewars.com/kata/5709bdd2f088096786000008/train/javascript

function superSize(num){
    let a = +num.toString().split('').sort((a, b) => b - a).join('');
    return num === a ? num : a;
}