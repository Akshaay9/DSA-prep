const removeDuplicateFromArr = (arr) => {
    let i = 0;
    for (j = 1; j < arr.length; j++) {
      // find element that is not equal to i 
      if (arr[i] !== arr[j]) {
        // move it to next to i
        arr[i + 1] = arr[j];
        // increment i
        i++;
      }
    }
    for (let k = i + 1; k < arr.length; k++) {
      arr[k] = "_";
    }
    return arr;
  };
  
  console.log(removeDuplicateFromArr([1, 1, 2, 2, 2, 3, 3]));
  