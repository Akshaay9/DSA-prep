const spiralOrder = (matrix) => {
  const n = matrix.length;
  const m = matrix[0].length;

  let left = 0;
  let top = 0;
  let bottom = n - 1;
  let right = m - 1;

  const result = [];

  //  TRBL

  // LEFT to RIGHt  -> TOP

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top += 1;

    //   TOP to Bottom --> RIGHG
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right -= 1;

    // RIGHT to LEFT  -> BOTTOm
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom -= 1;
    }

    // BOTTOm to TOP  ->LEFT
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left += 1;
    }
  }

  return result;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(spiralOrder(matrix));
