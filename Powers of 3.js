// https://www.codewars.com/kata/57be674b93687de78c0001d9/train/javascript

function largestPower(n){
    let arr = []
    for (let i = 0; i < n; i++){
        if(Math.pow(3, i) < n) arr.push(i)
    }
    return arr[arr.length - 1];
}