function christmasTree(n){
    let str = '';
    for(let i = 1, k = 1; i <= n * 2 - 1; i += 2, k++){
        str += (' ').repeat(n - k) + '*'.repeat(i) + (' ').repeat(n - k) + '\n';
    }
    for(let i = 1; i < n / 2; i++){
        str += (' ').repeat(n - 1) + '|' + (' ').repeat(n - 1) + '\n';
    }
    return str.slice(0, -1);
}
console.log(christmasTree(9));

