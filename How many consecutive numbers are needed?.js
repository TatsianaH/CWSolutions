// https://www.codewars.com/kata/559cc2d2b802a5c94700000c/train/javascript

function consecutive(arr) {
    arr.sort((a, b) => a - b);
    let res = 0;
    for(let i = arr[0] + 1; i <= arr[arr.length - 1] - 1; i++){
        if(!arr.includes(i)) res++;
    }
    return res;
}