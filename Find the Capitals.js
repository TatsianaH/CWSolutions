// https://www.codewars.com/kata/53573877d5493b4d6e00050c/train/javascript

function capital(c){
    let arr = [];
    for(let i = 0; i < c.length; i++){
        if(c[i].hasOwnProperty('state')){
            arr.push(`The capital of ${c[i].state} is ${c[i].capital}`);
        } else {
            arr.push(`The capital of ${c[i].country} is ${c[i].capital}`);
        }
    }
    return arr;
}