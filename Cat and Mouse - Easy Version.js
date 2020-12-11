// https://www.codewars.com/kata/57ee24e17b45eff6d6000164/train/javascript

function catMouse(x){
    let count = 0;
    for(let i = 0; i < x.length; i++){
        if(x[i] === '.') count++;
        if(x[i] === 'm' && count <= 3) return 'Caught!';
    }
    return 'Escaped!';
}

// 2 variant

function catMouse(x) {
    return x.length <= 5 ? 'Caught!' : 'Escaped!';
}