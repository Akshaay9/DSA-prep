const recurse = (capacity, weight, profit, idx, len) => {
    if (idx >= len) {
      return 0;
    }
    let consider = 0;
    let notConsider = 0;
  
    const currWeigth = weight[idx];
    const currProfit = profit[idx];
  
    if (currWeigth <= capacity) {
      consider =
        currProfit +
        recurse(capacity - currWeigth, weight, profit, (idx += 1), len);
    }
  
    notConsider = recurse(capacity, weight, profit, (idx += 1), len);
  
    return Math.max(consider, notConsider);
  };
  
  const knapSack = (capacity, weight, profit) => {
    return recurse(capacity, weight, profit, 0, profit.length);
  };
  
  const capacity = 3;
  const profit = [1, 2, 3];
  const weight = [4, 5, 6];
  
  console.log(knapSack(capacity, weight, profit));
  