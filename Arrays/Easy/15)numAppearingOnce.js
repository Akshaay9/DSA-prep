var singleNumber = function (nums) {
    let ans = nums[0];
    for (let i = 1; i < nums.length; i++) {
      ans = ans ^ nums[i];
    }
    return ans;
  };
  
  console.log(singleNumber([2, 2, 1]));
  