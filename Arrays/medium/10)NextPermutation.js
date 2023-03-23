const reverseArr = (idex, arr) => {
    let start = idex;
    let end = arr.length - 1;
  
    while (start <= end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start += 1;
      end -= 1;
    }
  
    return arr;
  };
  
  var nextPermutation = function (nums) {
    // 1) Travese from back (from position 2) and check if element less than previous element if yes store it else reverse array and return final answer
    let index = -1;
  
    for (let i = nums.length - 2; i >= 0; i--) {
      if (nums[i] < nums[i + 1]) {
        index = i;
        break;
      }
    }
  
    // from last to index to check if any element bigger than index then if it is swap it and break
  
    for (let i = nums.length - 1; i > index; i--) {
      if (nums[i] > nums[index]) {
        [nums[index], nums[i]] = [nums[i], nums[index]];
        break;
      }
    }
  
    // reverse idx+1 to arr.length-1
    return nums;
  };
  
  console.log(nextPermutation([1, 3, 2]));
  