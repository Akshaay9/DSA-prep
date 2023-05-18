// https://leetcode.com/problems/house-robber-ii/

const recursiveDp = (arr, start, end) => {
    if (start >= end) return 0;
  
    const consider = arr[start] + recursiveDp(arr, start + 2, end);
    const notConsider = recursiveDp(arr, start + 1, end);
    return Math.max(consider, notConsider);
  };
  
  var rob = function (nums) {
    if (nums.length === 0) return nums[0];
    const a = recursiveDp(nums, 0, nums.length - 1);
    const b = recursiveDp(nums, 1, nums.length);
    return Math.max(a,b);
  };