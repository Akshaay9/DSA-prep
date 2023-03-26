// BRUTE FORCE  // 
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return true;
      }
    }
    return false;
  };
  
  var longestConsecutive = function (nums) {
    let longest = 0;
  
    for (let i = 0; i < nums.length; i++) {
      let currEle = nums[i];
      let count = 1;
  
      while (linearSearch(nums, currEle + 1)) {
        count += 1;
        longest = Math.max(longest, count);
        currEle += 1;
      }
    }
  
    return longest;
  };
  
  console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

  
//    OPTIMAL // 
