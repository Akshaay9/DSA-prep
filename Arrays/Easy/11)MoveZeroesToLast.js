//  1)
const movrZeroesToEnd = (arr) => {
  let IDX = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[IDX] = arr[i];

      IDX += 1;
    }
  }
  while (IDX < arr.length) {
    arr[IDX] = 0;
    IDX++;
  }
  return arr;
};

console.log(movrZeroesToEnd([1, 0, 2, 3, 4, 5, 4, 0, 0, 3, 2, 1, 4, 3, 0, 1]));


// 2

// FIrst firnd index where element is zero
// next for loop where keep swapping element with non zero element

const movrZeroesToEnd2 = (arr) => {
    let IDX = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        IDX = i;
        break;
      }
    }
    for (let i = IDX + 1; i < arr.length; i++) {
      if (arr[i] !== 0) {
        [arr[IDX], arr[i]] = [arr[i], arr[IDX]];
        IDX++;
      }
    }
    return arr;
  };
  
  console.log(movrZeroesToEnd2([1, 0, 2, 3, 4, 5, 4, 0, 0, 3, 2, 1, 4, 3, 0, 1]));
  