//https://www.codewars.com/kata/55b3425df71c1201a800009c/train/javascript

  function stat(str) {
    if (str === '') {
      return '';
    }
    const strArr = str.split(',').map(el => el.split('|').map(elem => +elem));
    for (let i = 0; i < strArr.length; i++) {
      strArr[i] = strArr[i][2] + strArr[i][1] * 60 + strArr[i][0] * 60 * 60;
    }
    let sortedArr = strArr.sort((a, b) => a - b);
    let range = sortedArr[sortedArr.length - 1] - sortedArr[0];
    function getRes(res) {
      let sec = Math.trunc(res % 60);
      if (sec < 10) {
        sec = '0' + sec;
      }
      let fullMin = (res - sec) / 60;
      let min = Math.trunc(fullMin % 60);
      if (min < 10) {
        min = '0' + min;
      }
      let h = Math.trunc((fullMin - min) / 60);
      if (h < 10) {
        h = '0' + h;
      }
      return h + '|' + min + '|' + sec;
    }
    let average = sortedArr.reduce((acc, curr) => acc + curr, 0) / sortedArr.length;
    let median = 0;
    let index = 0;
    if (sortedArr.length % 2 === 1) {
      index = Math.floor(sortedArr.length / 2);
      median = sortedArr[index];
    } else {
      index = sortedArr.length / 2
      median = (sortedArr[index] + sortedArr[index - 1]) / 2;
    }
    return 'Range: ' + getRes(range) + ' Average: ' + getRes(average) + ' Median: ' + getRes(median); // your code
  }