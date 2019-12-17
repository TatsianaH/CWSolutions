//https://www.codewars.com/kata/check-your-arguments/train/javascript

function objectType(obj) {
    this.obj = obj;
    if(arguments.length === 0) return '[object Null]';
    else return Object.prototype.toString.call(obj);
}