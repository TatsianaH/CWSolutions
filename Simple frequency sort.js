// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript

function solve(arr){
    let obj = {};
    for(let num of arr){
        if(obj[num]) obj[num] += 1;
        else obj[num] = 1;
    }
    arr.sort((a, b) => obj[b] - obj[a] || a - b);
    return arr;
}

// 2 case

function solve(arr){
    let obj = {};
    for (let el of arr){
        if (obj[el]) obj[el]++;
        else obj[el] = 1;
    }
    arr = arr.sort((a, b)=> a-b).sort((a,b)=>obj[b] === obj[a]? a - b : obj[b]-obj[a]);
    return arr;
}
