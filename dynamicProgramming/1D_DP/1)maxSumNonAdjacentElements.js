https://www.geeksforgeeks.org/maximum-sum-such-that-no-two-elements-are-adjacent/

const recurseion = (arr, n) => {
    if (n >= arr.length) {
      return 0;
    }
  
    const consider = arr[n] + recurseion(arr, n + 2);
    const notConsider = recurseion(arr, n + 1);
    return Math.max(consider, notConsider);
  };
  
  const maximumSumSubsequence = (arr) => {
    return recurseion(arr, 0);
  };
  
  console.log(maximumSumSubsequence([3, 2, 5, 10, 7]));
  