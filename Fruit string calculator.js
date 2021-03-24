// https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3/train/javascript

function calculate(str) {
    let arr = str.split(' ');
    let nums = arr.filter(el => typeof +el === 'number' && !Number.isNaN(+el)).map(el => +el);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'loses') return nums[0] - nums[1];
        else if(arr[i] === 'gains') return nums[0] + nums[1];
    }
}