// https://www.codewars.com/kata/strings-strings-strings-easy/train/javascript

Number.prototype.toString = function(){
    return '' + this;
};

Boolean.prototype.toString = function(){
    return '' + this;
};

Array.prototype.toString = function(){
    return '['+ this.join(',') +']';
};