const arr1 = [1, 2, 3, 3, 4, 5, 6];
const arr2 = [3, 3, 5];

const intersionOfArr = (arr1, arr2) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    const arrI = arr1[i];
    const arrJ = arr2[j];

    if (arrI < arrJ) {
      i += 1;
    } else if (arrJ > arrI) {
      j += 1;
    } else {
      result.push(arrI);
      i += 1;
      j += 1;
    }
  }
  return result;
};

console.log(intersionOfArr(arr1, arr2));
