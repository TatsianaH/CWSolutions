// https://www.codewars.com/kata/5c46ea433dd41b19af1ca3b3/train/javascript

function hexWordSum(str){
    if(str.length === 0) return 0;
    let newStr = str.replace(/S/g, 5).replace(/O/g, 0);
    let arr = newStr.split(' ').map(el => {
        if(el.match(/[^A-F0-9]/g)) return 0;
        else return Number.parseInt(el, 16);
    });
    return arr.reduce((a, b) => a + b, 0);
}