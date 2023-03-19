const checkArrayIsSorted = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
      //
    } else {
      return false;
    }
  }
  return true;
};

console.log(checkArrayIsSorted([1, 4, 3, 4, 5, 6, 7, 8, 9]));
