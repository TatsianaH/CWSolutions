// https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7/train/javascript

function squaresNeeded(g){
    if(g === 0) return 0;
    if(g === 1) return 1;
    let res = 0;
    for(let i = 0; i < 64; i++){
        let num = Math.pow(2, i);
        if(num === g) return i + 1;
        res += num;
        if(res >= g) return i + 1;
    }
}


// 2 case

function squaresNeeded(grains){
    return Math.ceil(Math.log2(grains+1))
}