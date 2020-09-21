// https://www.codewars.com/kata/5bb50eb68f8bbdb4b300021d/train/javascript

const distributeEvenly = (array) => {
    let map = new Map;
    for (let s of array) {
        map.set(s, (map.get(s) || 0) + 1);
    }
    map = [...map];
    const array = array.map((_, i) => {
        if (map[i][1] > 1) map.push([map[i][0], map[i][1]- 1]);
        return map[i][0];
    });
    return array;
};