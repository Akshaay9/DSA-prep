var maxSubArray = function (nums) {
    let runningsum = 0;
    let maxSum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      const currEle = nums[i];
      runningsum += currEle;
  
      maxSum = Math.max(maxSum, runningsum);
  
      if (runningsum < 0) {
        runningsum = 0;
      }
    }
    return maxSum;
  };
  
  console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
  