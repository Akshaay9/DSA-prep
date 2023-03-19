const reverseRotateArr = (arr, steps) => {
  let result = [...arr];

  for (let i = 0; i < arr.length; i++) {
    let stepsToBeTaken = i - steps;
    if (stepsToBeTaken < 0) {
      stepsToBeTaken = arr.length + stepsToBeTaken;
    }
    arr[stepsToBeTaken] = result[i];
  }
  return arr;
};

console.log(reverseRotateArr([1, 2, 3, 4, 5, 6, 7], 3));
