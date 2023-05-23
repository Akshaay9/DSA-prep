const recursion = (arr, target, idx, map) => {
    if (target === 0) return 1;
    if (target < 0 || idx > arr.length) return 0;
  
    const currCoin = arr[idx];
  
    let consider = 0;
  
    if (currCoin <= target) {
      consider = recursion(arr, target - currCoin, idx, map);
    }
    const notConsider = recursion(arr, target, idx + 1, map);
  
    return consider + notConsider;
  };
  
  const coinChangeTwo = (arr, target) => {
    return recursion(arr, target, 0, {});
  };
  
  console.log(coinChangeTwo([1, 2, 5], 5));
  