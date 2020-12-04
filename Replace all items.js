// https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a/train/javascript

function replaceAll(seq, find, replace) {
    let arr = [];
    let str = '';
    if(typeof seq === 'string'){
        for(let l of seq){
            if(l === find) str += replace;
            else str += l;
        }
        return str;
    } else {
        for(let l of seq){
            if(l === find) arr.push(replace);
            else arr.push(l);
        }
        return arr;
    }
}

// 2 variant

function replaceAll(seq, find, replace) {
    return Array.isArray(seq) ? seq.map(x => x === find ? replace : x) : seq.split(find).join(replace);
}