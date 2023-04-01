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

const longestConsecutive = (arr) => {
  const map = new Map();

  if (arr.length === 0) {
    return 0;
  }

  let longestStreak = 1;

  for (let num of arr) {
    map.set(num, true);
  }

  for (const [key, _] of map) {
    // find the last possible element with the help of map
    if (!map.has(key - 1)) {
      let currNum = key;
      let currStreak = 1;
      // lkeep checking if it has next element
      while (map.has(currNum + 1)) {
        currNum += 1;
        currStreak += 1;
        longestStreak = Math.max(longestStreak, currStreak);
      }
    }
  }
  return longestStreak;
};

console.log(longestConsecutive([100, 200, 1, 2, 3, 4]));
