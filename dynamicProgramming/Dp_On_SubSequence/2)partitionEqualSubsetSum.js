const recurse = (totalSum, idx, nums, len, map) => {
    if (totalSum === 0) return true;
    if (idx >= len || totalSum < 0) return false;
  
    const idxNum = nums[idx];
  
    const key = `${idx}_${totalSum}`;
    if (map?.[key]!==undefined) {
      return map?.[key];
    }
    const  consider = recurse(totalSum - idxNum, idx + 1, nums, len, map);
     if(consider) return true
    const notConsider = recurse(totalSum, idx + 1, nums, len, map);
    map[key] = consider || notConsider;
    return consider || notConsider;
  };
  
  var canPartition = function(nums) {
       if (nums.length === 1) return false;
    const totalSum = nums.reduce((acc, ele) => (acc += ele));
    if (totalSum % 2 !== 0) return false;
    return recurse(totalSum / 2, 0, nums, nums.length,{});
      
  };