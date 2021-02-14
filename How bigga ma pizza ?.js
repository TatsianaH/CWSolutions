// https://www.codewars.com/kata/5e9c06f95ea5b30033903194/train/javascript

function howBiggaMaPizza(blob, crust) {
    let volume = 4 / 3 * Math.PI * ((blob / 2) ** 3);
    if(crust === 'thick') crust = 5;
    else crust = 1;
    let square = volume / crust;
    let radius = ((square / Math.PI).toFixed(3)) ** 0.5;
    return radius;
}