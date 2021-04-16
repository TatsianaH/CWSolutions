// https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript

function countDevelopers(list) {
    return list.filter(el => el.continent === 'Europe' &&  el.language === 'JavaScript').length;
}
