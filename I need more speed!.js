// https://www.codewars.com/kata/55de9c184bb732a87f000055/train/javascript

function reverse(arr) {
    for(let i = 0; i < arr.length / 2; i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}