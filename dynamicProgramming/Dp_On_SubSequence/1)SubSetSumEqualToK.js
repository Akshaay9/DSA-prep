const recursion = (arr, target, idx) => {
    if (target === 0) return true;
    if (idx >= arr.length) return false;
  
    const notConsider = recursion(arr, target, idx + 1);
    let consider = false;
    const currEle = arr[idx];
  
    if (currEle <= target) {
      consider = recursion(arr, target - currEle, idx + 1);
    }
    return notConsider || consider;
  };
  
  const subsetSumEqualtoTarget = (arr, target) => {
    return recursion(arr, target, 0);
  };
  
  console.log(subsetSumEqualtoTarget([1, 2, 3, 4], 5));
  