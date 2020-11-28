// https://www.codewars.com/kata/5fc182d8dce9ec00235a391f/train/javascript

function changeArray(arr){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0) res.push(arr[i] ** 2);
        else if(arr[i] < 0) res.push(-arr[i]);
    }
    return res;
}