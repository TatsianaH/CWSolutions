// https://www.codewars.com/kata/567bed99ee3451292c000025/train/javascript

String.prototype.vowel = function() {
    return /^[aeiou]$/i.test(this)
}