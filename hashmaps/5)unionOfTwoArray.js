const equalNumOfZeroOne = (arr) => {
    let result = 0;
    let runningSum = 0;
    const map = new Map();
    map.set(0, -1);
  
    for (let i = 0; i < arr.length; i++) {
      const currVal = arr[i] === 0 ? -1 : arr[i];
      runningSum += currVal;
      if (!map.has(runningSum)) {
        map.set(runningSum, i);
      } else {
        result = Math.max(result, i - map.get(runningSum));
      }
    }
  
    return result;
  };
  
  console.log(equalNumOfZeroOne([0, 1, 0, 1]));
  