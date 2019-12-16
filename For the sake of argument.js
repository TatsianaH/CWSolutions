// https://www.codewars.com/kata/for-the-sake-of-argument/train/javascript

function numbers(...args){
    return args.every(el => typeof el === 'number');
}