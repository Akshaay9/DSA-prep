var merge = function (intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let pair = intervals[0];
    const result = [];
  
    for (let i = 0; i < intervals.length; i++) {
      if (pair[1] >= intervals[i][0]) {
        pair[1] = Math.max(pair[1], intervals[i][1]);
      } else {
        result.push(pair);
        pair = intervals[i];
      }
    }
    result.push(pair);
    return result;
  };