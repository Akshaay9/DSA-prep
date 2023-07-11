const largestSubarrayWithZeroSum = (arr) => {
    let result = 0;
    let map = new Map();
    map.set(0, -1);
    let runningSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      const currEle = arr[i];
      runningSum += currEle;
  
      if (!map.has(runningSum)) {
        map.set(runningSum, i);
      } else {
        result = Math.max(result, i - map.get(runningSum));
      }
    }
    return result;
  };
  
  const arr = [15, -2, 2, -8, 1, 7, 10, 23];
  
  console.log(largestSubarrayWithZeroSum(arr));