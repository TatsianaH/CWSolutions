// https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript

function billboard(name, price = 30){
    const l = name.length;
    let res = [];
    for(let i = 0; i < l; i++){
        res.push(price);
    }
    return res.reduce((a, b) => a + b, 0);
}

// 2 variant

const billboard = (name, price = 30) =>
    [...name].reduce(pre => pre + price, 0);