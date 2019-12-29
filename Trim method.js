// https://www.codewars.com/kata/5a0b33888ba914a5e40000b7/train/javascript

String.prototype.trim = function(c){
    if(c === undefined) c = ' ';
    let arr = this.split('');
    let i = 0;
    while(arr[i] === c.toUpperCase() || arr[i] === c.toLowerCase()){
        arr.shift();
    }
    let j = arr.length - 1;
    while(arr[j] === c.toUpperCase() || arr[j] === c.toLowerCase()){
        arr.pop();
        j--;
    }
    return arr.join('');
}