// https://www.codewars.com/kata/56f5594a575d7d3c0e000ea0/train/javascript

function conferencePicker (citiesVisited, citiesOffered) {
    for(let i = 0; i < citiesOffered.length; i++){
        if(!citiesVisited.includes(citiesOffered[i])) return citiesOffered[i];
    }
    return 'No worthwhile conferences this year!';
}