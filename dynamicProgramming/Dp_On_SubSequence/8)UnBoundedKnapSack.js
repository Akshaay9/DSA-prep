const recursion = (values, weight, capacity, idx) => {
    if (idx >= values.length || capacity <= 0) {
      return 0;
    }
    const currValue = values[idx];
    const currWeight = weight[idx];
  
    let consider = 0;
  
    if (currWeight <= capacity) {
      consider =
        currValue + recursion(values, weight, capacity - currWeight, idx);
    }
    const notConsider = recursion(values, weight, capacity, idx + 1);
    return Math.max(consider, notConsider);
  };
  
  const knapSack = (values, weight, capacity) => {
    return recursion(values, weight, capacity, 0);
  };
  
  const values = [1, 4, 5, 7];
  const weight = [1, 3, 4, 5];
  const capacity = 8;
  
  console.log(knapSack(values, weight, capacity));
  