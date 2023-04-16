const nthLargestNumber = (arr, k) => {
  let LARGEST = -Infinity;
  let IDX = -1;

  while (k--) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > LARGEST) {
        LARGEST = arr[i];
        IDX = i;
      }
    }
    arr.splice(IDX, 1);
    if (k !== 0) {
      LARGEST = -Infinity;
      IDX = -1;
    }
  }
  return {
    LARGEST,
    IDX,
  };
};

const arr = [5, 4, 3, 2, 1, 3, 4, 5, 7, 6, 5, 9, 8];

console.log(nthLargestNumber(arr, 3));

//  or or orooror

const nthLargestNumber = (arr, n) => {
  let largest = -Infinity;
  let skipMap = new Map();

  while (n--) {
    for (let i = 0; i < arr.length; i++) {
      if (skipMap.has(arr[i])) continue;
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    skipMap.set(largest, true);
    largest = -Infinity;
  }

  const skipEle = [...skipMap.keys()];
  return skipEle[skipEle.length - 1];
};

const arr = [5, 4, 3, 2, 1, 3, 4, 5, 7, 6, 5, 9, 8];

console.log(nthLargestNumber(arr, 3));

