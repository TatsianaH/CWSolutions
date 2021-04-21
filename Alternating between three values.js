// https://www.codewars.com/kata/596776fbb4f24d0d82000141/train/javascript

function f(x, cc) {
    if(cc.a === x) x = cc.b;
    else if(cc.b === x) x = cc.c;
    else return cc.a
    return x;
}

// 2 variant

function f(x, cc) {
    let vals = Object.values(cc);
    let ind = vals.indexOf(x);
    return vals[ind + 1] == undefined ? vals[0] : vals[ind + 1]
}

// 3 variant

function f(x, cc) {
    for(let key in cc){
        if(cc[key] == x){
            if(key === 'a') return cc['b'];
            if(key === 'b') return cc['c'];
            if(key === 'c') return cc['a']
        }
    }
}

// 4 variant

const f = (x,{a,b,c}) => ({[a]:b,[b]:c,[c]:a})[x] ;
