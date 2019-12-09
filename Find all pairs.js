// https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3/train/javascript

function duplicates(arr){
    if(arr.length <= 1) return 0;
    const obj = {};
    for(let i = 0; i < arr.length; i++){
        if(!obj[arr[i]]) obj[arr[i]] = 1;
        else obj[arr[i]] += 1;
    }
    let count = Object.values(obj).map(el => Math.trunc(el / 2)).reduce((a, b) => a + b, 0);
    return count;
}