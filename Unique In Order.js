// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

const uniqueInOrder = function (it){
    if(it.length === 0) return [];
    let arr = [it[0]];
    for(let i = 1; i < it.length; i++){
        if(arr[arr.length - 1] !== it[i]) arr.push(it[i]);
    }
    return arr;
}