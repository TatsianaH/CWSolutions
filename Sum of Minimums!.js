// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

function sumOfMinimums(arr) {
    let minSum = [];
    for(let i = 0; i < arr.length; i++){
        let min = Math.min(...arr[i]);
        minSum.push(min);
    }
    return minSum.reduce((a, b) => a + b, 0);
}