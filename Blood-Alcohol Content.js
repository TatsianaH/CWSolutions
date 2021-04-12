// https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8/train/javascript

function bloodAlcoholContent(drinks, weight, sex, time){
    let r = sex === 'male' ? 0.73 : 0.66;
    return +(drinks.ounces * drinks.abv * 5.14 / weight * r - 0.015 * time).toFixed(4);
}
