// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr,n){
    let obj = {};
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(!obj[arr[i]]) obj[arr[i]] = 1;
        else obj[arr[i]] += 1;
        if(obj[arr[i]] <= n) res.push(arr[i]);
        else continue;
    }
    return res;
}