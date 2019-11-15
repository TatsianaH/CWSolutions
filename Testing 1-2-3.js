//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

let number = function(arr){
    if(arr.length === 0) return [];
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === 'string'){
            arr[i] = `${i + 1}: ${arr[i]}`;
        }
    }
    return arr;
}