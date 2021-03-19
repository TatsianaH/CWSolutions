// https://www.codewars.com/kata/5631213916d70a0979000066/train/javascript

function pattern(n){
    let output = '';
    for(let i = 0; i < n; i++){
        if(i === 0) output += '1\n';
        else if(i === n - 1) output += '1' + '*'.repeat(i) + (i + 1);
        else output += '1' + '*'.repeat(i) + (i + 1) + '\n';
    }
    return output;
}