// https://www.codewars.com/kata/sum-of-a-beach/train/javascript

function sumOfABeach(beach) {
    let count = 0;
    beach = beach.toLowerCase();
    if(beach.includes('sand')){
        count += beach.split('sand').length - 1;
    }
    if(beach.includes('water')){
        count += beach.split('water').length - 1;
    }
    if(beach.includes('fish')){
        count += beach.split('fish').length - 1;
    }
    if(beach.includes('sun')){
        count += beach.split('sun').length - 1;
    }
    return count;
}
