// https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4/train/javascript

function leastLarger(arr,i) {
    const a = arr.filter(el => el > arr[i]).sort((a, b) => a - b)[0];
    return arr.indexOf(a);
}