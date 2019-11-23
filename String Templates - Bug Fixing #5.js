// https://www.codewars.com/kata/string-templates-bug-fixing-number-5/train/javascript

function buildString(...template){
    return `I like ${template.join(', ')}!`;
}