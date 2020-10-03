// https://www.codewars.com/kata/5b5e0c0d83d64866bc00001d/train/javascript

function sayMeOperations(str) {
    const operations = {
        '1': 'addition',
        2: 'subtraction',
        3: 'multiplication',
        4: 'division',
    };

    let result = '';
    str = str.split(' ').map(Number);

    for(let i = 2; i < str.length; i++){
        if(str[i - 2] + str[i - 1] === str[i]) result += operations[1] + ', ';
        else if(str[i - 2] - str[i - 1] === str[i]) result += operations[2] + ', ';
        else if(str[i - 2] * str[i - 1] === str[i]) result += operations[3] + ', ';
        else result += operations[4] + ', ';
    }
    return result.slice(0, -2);
}