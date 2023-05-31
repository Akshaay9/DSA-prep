//  Brute Force

var merge = function (nums1, nums2) {
    const result = [];
    let i = 0;
    let j = 0;
  
    while (i < nums1.length && j < nums2.length) {
      if (nums1[i] <= nums2[j]) {
        result.push(nums1[i]);
        i += 1;
      } else {
        result.push(nums2[j]);
        j += 1;
      }
    }
    while (i < nums1.length) {
      result.push(nums1[i]);
      i += 1;
    }
    while (j < nums2.length) {
      result.push(nums2[j]);
      j += 1;
    }
    return result;
  };
  
  // OPTIMAL SOLUTION
  
  const merge = (arr1, arr2) => {
    let i = arr1.length - 1;
    let j = 0;
  
    while (i >= 0 && j < arr2.length) {
      if (arr1[i] > arr2[j]) {
        [arr1[i], arr2[j]] = [arr2[j], arr1[i]];
        i--;
        j++;
      } else {
        break;
      }
    }
    arr1 = arr1.sort((a, b) => a - b);
    arr2 = arr2.sort((a, b) => a - b);
    return {
      arr1,
      arr2,
    };
  };
  
  const arr1 = [1, 3, 4, 5, 7, 11, 13, 15];
  
  const arr2 = [2, 4, 6, 8];
  
  console.log(merge(arr1, arr2));
  