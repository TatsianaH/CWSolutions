// https://www.codewars.com/kata/567de72e8b3621b3c300000b/train/javascript

String.prototype.isLetter = function() {
    if(this.length > 1) return false;
    let value = this.charCodeAt();
    if (value >= 65 && value <= 90 || value >= 97 && value <= 122) return true;
    return false;
}