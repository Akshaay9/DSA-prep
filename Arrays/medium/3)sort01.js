// NAIVE APPROACH

// count number of C
// push totoal C 
// push remaining one's

var uniqueOccurrences = function (arr) {
    let countC = 0;
    let result = [];
  
    for (let num of arr) {
      if (num === 0) {
        countC += 1;
      }
    }
    for (let i = 0; i < countC; i++) {
      result.push(0);
    }
    let resultLen = result.length;
    while (resultLen < arr.length) {
      result.push(1);
      resultLen += 1;
    }
    return result;
  };
  
  console.log(uniqueOccurrences([0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1]));
  