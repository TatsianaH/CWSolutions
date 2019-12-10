// https://www.codewars.com/kata/576a29ab726f4bba4b000bb1/train/javascript

function nameScore(name){
    let count = 0;
    for(let key in alpha){
        for(let i = 0; i < name.length; i++){
            if(key.includes(name[i].toUpperCase())) count += alpha[key];
        }
    }
    const obj = {};
    obj[name] = count;
    return obj;
}