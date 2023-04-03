const printDiagonal = (matrix) => {
    const result = [];
    for (let i = 0; i < matrix.length; i++) {
      result.push(matrix[i][i]);
    }
    let len = matrix[0].length - 1;
    for (let i = 0; i < matrix.length; i++) {
      result.push(matrix[i][len]);
      len--;
    }
    return result;
  };
  
  const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  
  console.log(printDiagonal(matrix));
  