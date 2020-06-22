// https://www.codewars.com/kata/55eea63119278d571d00006a/train/javascript

function nextId(ids){
    ids.sort((a, b) => a - b);
    let max = Math.max(...ids);
    for(let i = 0; i <= max; i++){
        if(!ids.includes(i)) return i;
    }
    return max + 1;
}

// 2 case

function nextId(ids){
    for(let i = 0; ; i++){
        if(!ids.includes(i)) return i;
    }
}

