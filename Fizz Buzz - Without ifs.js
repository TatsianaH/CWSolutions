// https://www.codewars.com/kata/584c702256c98fc0a0000043/train/javascript

const fizzBuzz = n => {
    const result = n % 3 === 0 && n % 5 !== 0 ? 'Fizz' :
        n % 3 !== 0 && n % 5 === 0 ? 'Buzz' :
            n % 3 === 0 && n % 5 === 0 ? 'FizzBuzz' : n;
    return result;
};