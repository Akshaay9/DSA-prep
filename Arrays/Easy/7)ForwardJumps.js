const forwardRotateArr = (arr, steps) => {
    let result = [...arr];
  
    for (let i = 0; i < arr.length; i++) {
      let stepsToBeTaken = (i + steps) % arr.length;
      arr[stepsToBeTaken] = result[i];
    }
    return arr;
  };
  
  console.log(forwardRotateArr([1, 2, 3, 4, 5, 6, 7], 3));
  