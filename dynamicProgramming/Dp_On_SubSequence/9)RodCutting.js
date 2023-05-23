const recurse = (arr, capacity, idx) => {
    if (idx >= arr.length || capacity === 0) {
      return 0;
    }
    const currValue = arr[idx];
    const targetPieceToBeCut = idx + 1;
  
    let consider = 0;
    let notConsider = 0;
  
    if (targetPieceToBeCut <= capacity) {
      consider = currValue + recurse(arr, capacity - targetPieceToBeCut, idx);
    }
    notConsider = recurse(arr, capacity, idx + 1);
    return Math.max(consider, notConsider);
  };
  
  const rodCutting = (arr, capacity) => {
    return recurse(arr, capacity, 0);
  };
  
  console.log(rodCutting([3, 5, 8, 9, 10, 17, 17, 20], 8));
  