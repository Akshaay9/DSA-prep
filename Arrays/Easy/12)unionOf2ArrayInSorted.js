const arr1 = [1, 3, 4, 5, 7];
const arr2 = [2, 3, 5, 6];

const unionOfArr = (arr1, arr2) => {
  const result = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    const currI = arr1[i];
    const currJ = arr2[j];
    const lastEle = result[result.length - 1];
    if (currI < currJ) {
      if (result.length == 0 || lastEle !== currI) {
        result.push(currI);
      }
      i += 1;
    } else {
      if (result.length === 0 || lastEle !== currJ) {
        result.push(currJ);
      }
      j += 1;
    }
  }

  while (i < arr1.length) {
    if (arr1[i] !== result[result.length - 1]) {
      result.push(arr1[i]);
    }
    i++;
  }
  while (j < arr2.length) {
    if (arr2[j] !== result[result.length - 1]) {
      result.push(arr2[j]);
    }
    j++;
  }

  return result;
};

console.log(unionOfArr(arr1, arr2));
