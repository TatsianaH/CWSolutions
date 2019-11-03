//https://www.codewars.com/kata/create-four-letter-birding-codes-from-bird-names/train/javascript

  function birdCode(arr) {
  console.log(arr)
    const arr2 = arr.map(el => el.replace(/-/g, ' ').toUpperCase().split(' '));
    let res = '';
    let newArr = [];
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i].length === 1) {
        res = arr2[i][0].substr(0, 4);
        newArr.push(res);
      }
      if (arr2[i].length === 2) {
        res = arr2[i][0].substr(0, 2) + arr2[i][1].substr(0, 2);
        newArr.push(res);
      }
      if (arr2[i].length === 3) {
        res = arr2[i][0].substr(0, 1) + arr2[i][1].substr(0, 1) + arr2[i][2].substr(0, 2);
        newArr.push(res);
      }
      if (arr2[i].length === 4) {
        res = arr2[i][0].substr(0, 1) + arr2[i][1].substr(0, 1) +
          arr2[i][2].substr(0, 1) + arr2[i][3].substr(0, 1);
        newArr.push(res);
      }
    }
    return newArr;
  }