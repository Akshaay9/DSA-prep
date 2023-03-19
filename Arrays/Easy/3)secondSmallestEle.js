const secondSmallestNumber = (arr, k) => {
    let SMALLEST = Infinity;
    let SECOND_SMALLEST = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < SMALLEST) {
        SECOND_SMALLEST = SMALLEST;
        SMALLEST = arr[i];
      }
      if (arr[i] !== SMALLEST && arr[i] < SECOND_SMALLEST) {
        SECOND_SMALLEST = arr[i];
      }
    }
    return {
      SMALLEST,
      SECOND_SMALLEST,
    };
  };
  
  const arr = [5, 4, 3, 2, 1, 3, 4, 5, 7, 6, 5, 9, 8];
  
  console.log(secondSmallestNumber(arr, 3));
  