const longestSubArraySumEqualTok = (arr, k) => {
  let runningSum = 0;
  let map = new Map();
  map.set(0, -1);
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    const currEle = arr[i];
    runningSum += currEle;

    const prefixSum = runningSum - k;

    if (map.has(prefixSum)) {
      result = Math.max(result, i - map.get(prefixSum));
    } else {
      map.set(runningSum, i);
    }
  }
  return result;
};

console.log(longestSubArraySumEqualTok([10, 5, 2, 7, 1, 9], 15));
