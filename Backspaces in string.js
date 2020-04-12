// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

function cleanString(s) {
    let str = '';
    let count = 0;
    for(let i = s.length - 1; i>=0 ; i--){
        if(s[i] !== '#' && count === 0) str = s[i] + str;
        if(s[i] === '#') count++;
        if(s[i] !== '#' && count > 0) count--;
    }
    return str;
};

// 2 case

function clean_string(str) {
    var strArr = str.split('');
    if(strArr === [] || strArr.indexOf('#') === -1) {
        return strArr.join('');
    } else {
        for(let i = 0; i < strArr.length; i++) {
            if(strArr[i] === '#') {
                if(strArr[i-1] === undefined) {
                    strArr.splice(i,1);
                    return clean_string(strArr.join(''));
                } else {
                    strArr.splice(i-1,2);
                    return clean_string(strArr.join(''));
                }
            }
        }
    }
}

// 3 case

function clean_string(s) {
    const result = [];
    for (let letter of s) {
        if (letter === '#') {
            result.pop();
        } else {
            result.push(letter);
        }
    }
    return result.join('');
}
