const waveArr = (arr) => {
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

console.log(waveArr([1, 2, 3, 4, 5, 6]));

// [ 1, 6, 2, 5, 3, 4 ]

const waveArr = (arr) => {
  arr = arr.sort((a, b) => a - b);
  let START_POINT = 0;
  let END_POINT = arr.length - 1;
  let LARGEST_ELE = arr[arr.length - 1] + 1;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr[i] = arr[i] + (arr[START_POINT] % LARGEST_ELE) * LARGEST_ELE;
      START_POINT += 1;
    } else {
      arr[i] = arr[i] + (arr[END_POINT] % LARGEST_ELE) * LARGEST_ELE;
      END_POINT -= 1;
    }
  }
  arr.forEach((ele, i) => {
    arr[i] = Math.floor(ele / LARGEST_ELE);
  });
  return arr;
};

console.log(waveArr([5, 4, 3, 2, 12, 8, 5, 3, 2, 1]));

