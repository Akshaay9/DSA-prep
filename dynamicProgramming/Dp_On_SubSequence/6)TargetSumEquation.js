const recursion = (nums, idx, target, map) => {
    if (target === 0 && idx === nums.length) {
      return 1;
    }
    if (target !== 0 && nums.length === idx) {
      return 0;
    }
  
    const positive = recursion(nums, idx + 1, target + nums[idx], map);
    const negative = recursion(nums, idx + 1, target - nums[idx], map);
    return positive + negative;
  };
  
  var findTargetSumWays = function (nums, target) {
    return recursion(nums, 0, target, {});
  };
  
  console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
  