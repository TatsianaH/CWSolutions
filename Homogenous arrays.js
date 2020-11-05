// https://www.codewars.com/kata/57ef016a7b45ef647a00002d/train/javascript

function filterHomogenous(a) {
    let arr = [];
    for(let i = 0; i < a.length; i++){
        let temp = [];
        for(let j = 0; j < a[i].length; j++){
            const typeEl = typeof a[i][0];
            if(typeof a[i][j] === typeEl) {
                temp.push(a[i][j]);
                if(j === a[i].length - 1){
                    if(a[i].length === temp.length) {
                        arr.push(temp);
                        temp = [];
                    }
                }
            }
        }
    }
    return arr;
}

// 2 variant

let filterHomogenous = a => a.filter(b => b.length > 0 && b.every(e => typeof e == typeof b[0]));