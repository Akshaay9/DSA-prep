var setZeroes = function (matrix) {
    const x = new Map();
    const y = new Map();
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
          x.set(i, true);
          y.set(j, true);
        }
      }
    }
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (y.has(j) || x.has(i)) {
          matrix[i][j] = 0;
        }
      }
    }
    return matrix;
  };