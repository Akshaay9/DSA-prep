const totalSubArraySum = (arr, k) => {
    const map = new Map();
    map.set(0, 1);
    let runningSum = 0;
    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {
      const currEle = arr[i];
      runningSum += currEle;
      if (map.has(runningSum - k)) {
        count += map.get(runningSum - k);
      }
      map.set(runningSum, (map.get(runningSum) || 0) + 1);
    }
    return count;
  };
  
  console.log(totalSubArraySum([1, 1, 1], 2));
  