const rearrangeEventOddPointer = (arr) => {
  let START_IDX = 0;
  let END_IDX = arr.length - 1;
  let LARGEST_ELE = arr[END_IDX] + 1;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr[i] = arr[i] + (arr[START_IDX] % LARGEST_ELE) * LARGEST_ELE;
      START_IDX += 1;
    } else {
      arr[i] = arr[i] + (arr[END_IDX] % LARGEST_ELE) * LARGEST_ELE;
      END_IDX -= 1;
    }
  }
  arr.forEach((_, i) => {
    arr[i] = Math.floor(arr[i] / LARGEST_ELE);
  });
  return arr;
};

console.log(rearrangeEventOddPointer([1, 2, 3, 4, 5, 6]));
