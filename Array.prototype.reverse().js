//https://www.codewars.com/kata/53b2ff49b82af296ce001139/train/javascript

Array.prototype.reverse = function() {
    if(this.length === 0) return this;
    for(let i = 0; i < this.length / 2; i++){
        let temp = this[i];
        this[i] = this[this.length - 1 - i];
        this[this.length - 1 - i] = temp;
    }
    return this;
};