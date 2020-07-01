// https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/javascript

function solve(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr.includes(arr[i]) && !arr.includes(-arr[i])){
            return arr[i];
        }
    }
};

// 2 case

const solve = (arr) => arr.find(el => !arr.includes(-el));