//https://www.codewars.com/kata/583710f6b468c07ba1000017/train/javascript

  function proofread(str) {
    let str2 = str.toLowerCase().replace(/ie/g, 'ei');
    const arr = str2.split('. ');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length);
    }
    return arr.join('. ');
  }