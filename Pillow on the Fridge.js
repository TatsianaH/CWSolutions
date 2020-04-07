// https://www.codewars.com/kata/57d147bcc98a521016000320/train/javascript

function pillow(s){
    let nInd = [];
    let bInd = [];
    for(let i = 0; i < s[0].length; i++){
        if(s[0][i] === 'n') nInd.push(i);
    }
    for(let i = 0; i < s[1].length; i++){
        if(s[1][i] === 'B') bInd.push(i);
    }

    for(let i = 0; i < bInd.length; i++){
        for(let j = 0; j < nInd.length; j++){
            if(bInd[i] === nInd[j]) return true;
        }
    }
    return false;
}