// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/javascript

function noOdds( v ){
    let res = [];
    v.forEach(el => {
        if(el % 2 === 0) res.push(el);
    });
    return res;
}