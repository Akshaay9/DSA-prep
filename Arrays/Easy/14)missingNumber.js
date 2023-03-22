var missingNumber = function (nums) {
  const maxNum = nums.length;
  const totalSum = (maxNum * (maxNum + 1)) / 2;
  let runningSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const currVal = nums[i];
    runningSum += currVal;
  }
  return totalSum - runningSum;
};
console.log(missingNumber([3, 0, 1]));

var missingNumber2 = function (nums) {
  const map = new Map();
  for (let num of nums) {
    map.set(num, true);
  }
  for (let i = 0; i <= nums.length; i++) {
    if (!map.has(i)) {
      return i;
    }
  }
};
