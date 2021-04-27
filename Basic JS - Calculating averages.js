// https://www.codewars.com/kata/529f32794a6db5d32a00071f/train/javascript

const Calculator = {
    average: function(...arguments) {
        if(arguments.length === 0) return 0;
        return [].concat(arguments).reduce((a, b) => a + b, 0) / arguments.length;
    }
};
