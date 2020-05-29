// https://www.codewars.com/kata/5bce125d3bb2adff0d000245/train/javascript

function londonCityHacker(arr) {
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number' && res[res.length - 1] !== 1.50 || typeof arr[i] === 'number' && res.length === 0) {
            res.push(1.50);
        } else if(typeof arr[i] === 'number' && res[res.length - 1] === 1.50) {
            res.push(0);
        } else {
            res.push(2.40);
        }
    }
    return `£${res.reduce((a, b) => a + b, 0).toFixed(2)}`;
}