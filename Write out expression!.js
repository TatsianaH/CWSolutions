// https://www.codewars.com/kata/57e2afb6e108c01da000026e/train/javascript

function expressionOut(expr) {
    const operators = {
        '+':   'Plus ',
        '-':   'Minus ',
        '*':   'Times ',
        '/':   'Divided By ',
        '**':  'To The Power Of ',
        '=':   'Equals ',
        '!=':  'Does Not Equal '
    };

    const nums = {
        '1': 'One ',
        '2': 'Two ',
        '3': 'Three ',
        '4': 'Four ',
        '5': 'Five ',
        '6': 'Six ',
        '7': 'Seven ',
        '8': 'Eight ',
        '9': 'Nine ',
        '10': 'Ten '
    }
    expr = expr.split(' ');
    let str = [];
    for(let i = 0; i < expr.length; i++){
        if(i === 1 && !operators[expr[1]] || nums[expr[1]]) return 'That\'s not an operator!';
        else if (i === 1 && operators[expr[1]]) str += operators[expr[1]];
        else str += nums[expr[i]];
    }
    return str.trimRight();
}