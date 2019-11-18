// https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript

var FilterString = function(v) {
    let res = '';
    for(let i = 0; i < v.length; i++){
        if(!isNaN(+v[i])) res += v[i];
    }
    return +res;
}