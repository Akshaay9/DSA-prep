const recurse = (arr, transaction, idx, canBuy, map) => {
    if (transaction === 0 || idx >= arr.length) {
      return 0;
    }
  
    const currKey = `${transaction}_${idx}_${canBuy}`;
  
    if (map.has(currKey)) {
      return map.get(currKey);
    }
  
    let buyIt = 0;
    let sellIt = 0;
    let idle = 0;
  
    if (canBuy) {
      buyIt = -arr[idx] + recurse(arr, transaction, idx + 1, false, map);
    } else {
      sellIt = arr[idx] + recurse(arr, transaction - 1, idx + 1, true, map);
    }
    idle = recurse(arr, transaction, idx + 1, canBuy, map);
  
    let ans = Math.max(buyIt, sellIt, idle);
    map.set(currKey, ans);
    return ans;
  };
  
  const maxProfit = (arr) => {
    const map = new Map();
    return recurse(arr, 1, 0, true, map);
  };