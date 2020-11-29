// https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript

function findDeletedNumber(arr, mixArr) {
    mixArr = mixArr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== mixArr[i]) return arr[i];
    }
    return 0;
}

// 2 variant

function findDeletedNumber(arr, mixArr) {
    if(arr.length === mixArr.length) return 0;
    for(var k in arr)
        if(mixArr.indexOf(arr[k]) === -1)
            return arr[k];
    return 0;
}