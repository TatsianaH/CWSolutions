// https://www.codewars.com/kata/57fb142297e0860073000064/train/javascript

function product(s){
    let ex = 0;
    let que = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === '!') ex++;
        else if(s[i] === '?') que++;
    }
    return ex * que;
}

// 2 variant

function product(s){
    const excs = s.split('!').length - 1
    const ques = s.split('?').length - 1
    return excs * ques;
}