var moveZeroOne = function (arr) {
    let start = 0;
    let end = arr.length - 1;
    let pointer = 0;
    while (pointer <= end) {
      const pointerEle = arr[pointer];
      //
      if (pointerEle === 0) {
        [arr[start], arr[pointer]] = [arr[pointer], arr[start]];
        start += 1;
        pointer += 1;
      }
      //
      if (pointerEle === 1) {
        pointer += 1;
      }
      //
      if (pointerEle === 2) {
        [arr[end], arr[pointer]] = [arr[pointer], arr[end]];
        end--;
      }
      //
    }
    return arr;
  };
  
  console.log(
    moveZeroOne([
      0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 2, 2, 2, 2, 1, 2, 0, 1, 2, 0, 1, 0, 2,
    ])
  );
  