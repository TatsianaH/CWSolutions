//https://www.codewars.com/kata/59a9919107157a45220000e1/train/javascript

const findAll = (arr, n) => {
    let ind = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === n) ind.push(i);
    }
    return ind;
}