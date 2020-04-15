// https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed/train/javascript

function jumpingNumber(n){
    const arr = String(n).split('');
    if(arr.length <= 1) return 'Jumping!!';
    for(let i = 0; i < arr.length - 1; i++){
        if(Math.abs(+arr[i] - +arr[i + 1]) !== 1) return 'Not!!';
    }
    return 'Jumping!!';
}