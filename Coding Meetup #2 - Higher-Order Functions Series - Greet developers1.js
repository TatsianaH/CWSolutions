// https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript

function greetDevelopers(list) {
    list.forEach(el => el.greeting = `Hi ${el.firstName}, what do you like the most about ${el.language}?`);
    return list;
}
