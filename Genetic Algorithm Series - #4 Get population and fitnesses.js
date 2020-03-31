// https://www.codewars.com/kata/567b468357ed7411be00004a/train/javascript

const mapPopulationFit = (p, fitness) => {
    const arr = p.map(el => ({'chromosome': el, 'fitness': fitness(el)}));
    return arr;
};