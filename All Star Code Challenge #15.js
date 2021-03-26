// https://www.codewars.com/kata/586560a639c5ab3a260000f3/train/javascript

function rotate(str){
    if(str.length === 0) return [];
    let arr = [str];
    for(let i = 1; i < str.length; i++){
        arr.unshift(arr[0].slice(-1) + arr[0].slice(0, -1));
    }
    return arr;
}

// 2 variant

function rotate(str){
    let res = [];
    for (let i = 0; i < str.length; i++){
        str = str.slice(1) + str[0];
        res.push(str);
    }
    return res;
}