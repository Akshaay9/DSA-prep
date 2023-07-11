// BRUTE FORCE
https://leetcode.com/problems/continuous-subarray-sum/description/
const getArr = (arr, start, end) => {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(arr[i]);
    }
    return result;
  };
  
  const getSum = (arr) => {
    return arr.reduce((acc, ele) => (acc += ele), 0);
  };
  
  var checkSubarraySum = function (nums, k) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        const contigiousArr = getArr(nums, i, j);
        console.log(contigiousArr);
        if (contigiousArr.length >= 2 && getSum(contigiousArr) % k === 0) {
          return true;
        }
      }
    }
    return false;
  };
  
  console.log(checkSubarraySum([0, 0], 6));

  
//   OPTIMAL
var checkSubarraySum = function (nums, k) {
    const map = new Map();
    map.set(0, -1);
    let tempSum = 0;
    for (let i = 0; i < nums.length; i++) {
      const currEle = nums[i];
      tempSum += currEle;
      const reminder = tempSum % k;
      if (!map.has(reminder)) {
        map.set(reminder, i);
      } else if (i - map.get(reminder) > 1) {
        return true;
      }
    }
    return false;
  };