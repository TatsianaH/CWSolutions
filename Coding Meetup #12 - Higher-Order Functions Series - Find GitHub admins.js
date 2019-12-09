// https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript

function findAdmin(list, lang) {
    return list.filter(el => el.language === lang && el.githubAdmin === 'yes');
}