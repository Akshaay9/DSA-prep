const secondLargest = (arr) => {
    let LARGEST = -Infinity;
    let SECOND_LARGEST = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > LARGEST) {
        SECOND_LARGEST = LARGEST;
        LARGEST = arr[i];
      }
      if (arr[i] !== LARGEST && arr[i] > SECOND_LARGEST) {
        SECOND_LARGEST = arr[i];
      }
    }
    return {
      LARGEST,
      SECOND_LARGEST,
    };
  };
  
  const arr = [5, 4, 3, 2, 1, 3, 4, 5, 7, 6, 5, 9, 8];
  
  console.log(secondLargest(arr));
  