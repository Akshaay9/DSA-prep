const recurse = (currRow, currCol, maxRow, maxCol, map) => {
    if (currCol === maxCol - 1 && currRow === maxRow - 1) {
      return 1;
    }
    if (currCol < 0 || currCol > maxCol || currRow < 0 || currRow > maxRow) {
      return 0;
    }
    const currKey = `${currRow}-${currCol}`;
    if (map.has(currKey)) {
      return map.get(currKey);
    }
    const moveDown = recurse(currRow + 1, currCol, maxRow, maxCol, map);
    const moveRight = recurse(currRow, currCol + 1, maxRow, maxCol, map);
    let ans = moveDown + moveRight;
    map.set(currKey, ans);
    return ans;
  };
  
  var uniquePaths = function (m, n) {
    const map = new Map();
    return recurse(0, 0, m, n, map);
  };