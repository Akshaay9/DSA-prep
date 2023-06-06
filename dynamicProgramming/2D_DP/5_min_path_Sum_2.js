const recurse = (matrix, currRow, currCol, row, col, map) => {
    if (currCol < 0 || currCol >= col) {
      return Infinity;
    }
    
    if (currRow === row - 1) {
      return matrix[currRow][currCol];
    }
    const currKey = `${currRow}-${currCol}`;
    if (map[currKey] !== undefined) {
      return map[currKey];
    }
  
    const leftDia =
      matrix[currRow][currCol] +
      recurse(matrix, currRow + 1, currCol - 1, row, col, map);
    const centerDia =
      matrix[currRow][currCol] +
      recurse(matrix, currRow + 1, currCol, row, col, map);
    const rightDia =
      matrix[currRow][currCol] +
      recurse(matrix, currRow + 1, currCol + 1, row, col, map);
    const ans = Math.min(leftDia, centerDia, rightDia);
    map[currKey] = ans;
    return ans;
  };
  
  var minFallingPathSum = function (matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    let val = Infinity;
    let memo = {};
    for (let i = 0; i < col; i++) {
      let ans = recurse(matrix, 0, i, row, col, memo);
      val = Math.min(val, ans);
    }
    return val;
  };