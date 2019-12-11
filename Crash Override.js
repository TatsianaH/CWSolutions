// https://www.codewars.com/kata/crash-override/train/javascript

function aliasGen(...args){
    if(!args[0][0].match(/[a-z]/i) || !args[1][0].match(/[a-z]/i)) {
        return "Your name must start with a letter from A - Z.";
    }
    let alias = [];
    alias[0] = firstName[args[0][0].toUpperCase()];
    alias[1] = surname[args[1][0].toUpperCase()];
    return alias.join(' ');
}