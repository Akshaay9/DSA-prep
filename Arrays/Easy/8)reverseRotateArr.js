const rotateArr = (array, rotate) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    let jumps = i - rotate;
    if (jumps < 0) {
      jumps = arr.length + jumps;
    }
    result[jumps] = arr[i];
  }
  return result;
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const length = 7;
const rotate = 2;

console.log(rotateArr(arr, rotate));