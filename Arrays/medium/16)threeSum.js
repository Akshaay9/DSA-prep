const threeSum = (arr, targetSUm = 0) => {
  arr = arr.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const currEle = arr[i];
    if (i > 0 && currEle === arr[i - 1]) {
      continue;
    }
    let start = i + 1;
    let end = arr.length - 1;
    while (start < end) {
      const threeSumVal = currEle + arr[start] + arr[end];
      if (threeSumVal > targetSUm) {
        end -= 1;
      } else if (threeSumVal < targetSUm) {
        start += 1;
      } else if (threeSumVal === targetSUm) {
        result.push([currEle, arr[start], arr[end]]);
        start += 1;
        while (arr[start] === arr[start - 1] && start < end) {
          start += 1;
        }
      }
    }
  }
  return result;
};
