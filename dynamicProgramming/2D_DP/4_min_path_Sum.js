const recursion = (grid, row, col, currRow, currCol, map) => {
    if (currCol >= col || currRow >= row) {
      return Infinity;
    }
    if (currCol === col - 1 && currRow === row - 1) {
      return grid[currRow][currCol];
    }
    const currKey = `${currRow}-${currCol}`;
    if (map[currKey] !== undefined) {
      return map[currKey];
    }
  
    const moveRight =
      grid[currRow][currCol] +
      recursion(grid, row, col, currRow, currCol + 1, map);
    const moveDown =
      grid[currRow][currCol] +
      recursion(grid, row, col, currRow + 1, currCol, map);
    const ans = Math.min(moveRight, moveDown);
    map[currKey] = ans;
    return ans;
  };
  var minPathSum = function (grid) {
    return recursion(grid, grid.length, grid[0].length, 0, 0, {});
  };