// simple christmasTree
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

// christmasTree with row of the same toys
function christmasTreeWithSameToys(n){
    let toys = '^0*&$G*j';
    let str = '';
    for(let i = 1, k = 1; i <= n * 2 - 1; i += 2, k++){
        let index = Math.trunc(Math.random() * toys.length);
        str += (' ').repeat(n - k) + (toys[index]).repeat(i) + (' ').repeat(n - k) + '\n';
    }
    for(let i = 1; i < n / 2; i++){
        str += (' ').repeat(n - 1) + '|' + (' ').repeat(n - 1) + '\n';
    }
    return str.slice(0, -1);
}
console.log(christmasTreeWithSameToys(9));

// christmasTree with row of the random toys
function christmasTreeWithRandomToys(n){
    let toys = '^0*§*&*$G*j';
    let str = '';
    for(let i = 1, k = 1; i <= n * 2 - 1; i += 2, k++){
        str += (' ').repeat(n - k);
        for(let j = 1; j <= i; j++){
            let index = Math.trunc(Math.random() * toys.length);
            str += toys[index];
        }
        str += (' ').repeat(n - k) + '\n';
    }
    for(let i = 1; i < n / 2; i++){
        str += (' ').repeat(n - 1) + '|' + (' ').repeat(n - 1) + '\n';
    }
    return str.slice(0, -1);
}
console.log(christmasTreeWithRandomToys(9));


// christmasTree created with specific toys @#*
function christmasTreeWithSpecificToys(n){
    let str = '';
    let sum = 0;
    for(let i = 1; i < n * 2; i++){
        sum += i;
    }
    let toys = '@#*'.repeat(sum).slice(0, sum);
    for(let i = 1, k = 1; i <= n * 2 - 1; i += 2, k++){
        str += (' ').repeat(n - k);
        for(let j = 1; j <= i; j++){
            str += toys[0];
            toys = toys.slice(1);
        }
        str += (' ').repeat(n - k) + '\n';
    }
    for(let i = 1; i < n / 2; i++){
        str += (' ').repeat(n - 1) + '|' + (' ').repeat(n - 1) + '\n';
    }
    return str.slice(0, -1);
}

console.log(christmasTreeWithSpecificToys(9));
