var intersection = function (nums1, nums2) {
    const hash1 = new Map();
  
    const result = [];
    for (const num of nums1) {
      hash1.set(num, true);
    }
    for (const num of nums2) {
      if (hash1.get(num)) {
        result.push(num);
        hash1.set(num, false);
      }
    }
   
    return result;
  };