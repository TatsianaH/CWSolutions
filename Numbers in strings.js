function solve(s){
  let str = s.match(/\d+/g).sort((a, b) => a - b);
    return +str[str.length - 1];
}
