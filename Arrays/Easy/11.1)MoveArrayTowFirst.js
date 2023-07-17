const movrZeroesToStart = (arr) => {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      if (arr[start] === 0) {
        start += 1;
      } else if (arr[end] === 0) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start += 1;
      } else {
        //  No Need to move +ve if both are not zero, 
        // move only last pointer since we need to store
        //  all negative at end so its important to store negative at end
        end -= 1;
      }
    }
    return arr;
  };
  
  console.log(
    movrZeroesToStart([1, 0, 2, 3, 4, 5, 4, 0, 0, 3, 2, 1, 4, 3, 0, 1])
  );
  