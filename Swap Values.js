// https://www.codewars.com/kata/5388f0e00b24c5635e000fc6/train/javascript

function swapValues(args) {
    this.args = args;
    let temp = args[0];
    args[0] = args[1];
    args[1] = temp;
    return args;
}