// https://www.codewars.com/kata/52829c5fe08baf7edc00122b/train/javascript

Array.prototype.numberOfOccurrences = function(num) {
    let res = 0;
    for(let i = 0; i < this.length; i++){
        if(this[i] === num) res++;
    }
    return res;
}