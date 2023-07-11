https://leetcode.com/problems/intersection-of-two-arrays-ii/description/

var intersect = function (nums1, nums2) {
    const map = new Map();
    const result = [];
  
    for (let i = 0; i < nums1.length; i++) {
      map.set(nums1[i], (map.get(nums1[i]) || 0) + 1);
    }
  
    for (let i = 0; i < nums2.length; i++) {
      const currEle = nums2[i];
      if (map.has(currEle)) {
        result.push(currEle);
        map.set(currEle, map.get(currEle) - 1);
        if (map.get(currEle) <= 0) {
          map.delete(currEle);
        }
      }
    }
  
    return result;
  };