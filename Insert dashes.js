// https://www.codewars.com/kata/55960bbb182094bc4800007b/train/javascript

function insertDash(num) {
    num = num.toString();
    let n = '';
    for(let i = 0; i < num.length; i++){
        if(num[i] % 2 && num[i + 1] % 2) n += num[i] + '-';
        else n += num[i];
    }
    return n;
}

