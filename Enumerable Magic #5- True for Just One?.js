// https://www.codewars.com/kata/54599705cbae2aa60b0011a4/train/javascript

function one(arr, fun){
    return arr.filter(el => fun(el)).length === 1;
}