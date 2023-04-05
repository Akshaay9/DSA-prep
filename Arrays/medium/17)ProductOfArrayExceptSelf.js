const productExceptSelf = (arr) => {
  const result = [];

  const forwardProdArr = [];
  const backwardProdArr = [];

  let forrwardCount = 1;
  let backwardCount = 1;

  arr.forEach((ele) => {
    forrwardCount *= ele;
    forwardProdArr.push(forrwardCount);
  });

  arr.reverse().forEach((ele) => {
    backwardCount *= ele;
    backwardProdArr.unshift(backwardCount);
  });

  console.log(forwardProdArr);
  console.log(backwardProdArr);

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      result.push(backwardProdArr[i + 1]);
    } else if (i === arr.length - 1) {
      result.push(forwardProdArr[i - 1]);
    } else {
      result.push(backwardProdArr[i + 1] * forwardProdArr[i - 1]);
    }
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));

// [24,12,8,6]
