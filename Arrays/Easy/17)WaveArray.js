// https://www.geeksforgeeks.org/sort-array-wave-form-2/
// NAIVE APPROACH ->   odd idx>arr[i+1] && odd idx> arr[i-2]
// sort it and traverswe throught odd index and swap adjacent element

const waveArray = (arr) => {
    arr = arr.sort((a, b) => a - b);
  
    for (let i = 0; i < arr.length - 1; i += 2) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    return arr;
  };
  
  console.log(waveArray([10, 5, 6, 3, 2, 20, 100, 80]));
  
  // OPTIMISED APPROACH
  // travserse through odd index
  //  if(arr[i]<arr[i-1]) SWAP
  // if(arr[i]<arr[i+1]) SWAP
  
  
  const waveArray1 = (arr) => {
    for (let i = 0; i < arr.length; i+=2) {
      if (i > 0 && arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      }
      if (i < arr.length - 1 && arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    return arr;
  };
  
  console.log(waveArray1([10, 5, 6, 3, 2, 20, 100, 80]));
  