// https://www.codewars.com/kata/5f656199132bf60027275739/train/javascript

function generateMarkdowns(markdown,text,urlOrLanguage) {
    if(markdown === 'link') return '[' + text + '](' + urlOrLanguage + ')';
    else if(markdown === 'img') return '![' + text + '](' + urlOrLanguage + ')';
    else return '```' + urlOrLanguage + '\n' + text + '\n```';
};