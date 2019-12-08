// https://www.codewars.com/kata/54b81566cd7f51408300022d/train/javascript

function wordSearch(query, seq){
    let arr = seq.filter(el => el.toLowerCase().includes(query.toLowerCase()))
    return arr.length > 0 ? arr : ['Empty'];
}