const recurse = (arr, target, idx) => {
    if (target === 0) {
      return 1;
    }
    if (idx >= arr.length) {
      return 0;
    }
  
    const consider = recurse(arr, target - arr[idx], idx + 1);
    const notConsider = recurse(arr, target, (idx += 1));
    return consider + notConsider;
  };
  
  const totalSubsetEqualToTarget = (arr, target) => {
    return recurse(arr, target, 0);
  };
  
  console.log(totalSubsetEqualToTarget([1, 2], 3));
  