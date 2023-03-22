// IF Positive and Negative are Equal

var rearrangeArray = function (nums) {
  let positive = 0;
  let negative = 1;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const currEle = nums[i];

    if (currEle < 0) {
      result[negative] = currEle;
      negative += 2;
    } else {
      result[positive] = currEle;
      positive += 2;
    }
  }
  return result;
};

// IF Positive and Negative are  NOT Equal

var rearrangeArray = function (nums) {
  let positiveArr = [];
  let negativeArr = [];
  const result = [];

  nums.forEach((ele) => {
    if (ele > 0) {
      positiveArr.push(ele);
    } else {
      negativeArr.push(ele);
    }
  });

  // IF POSTIVE >>> NEGATIVE
  //

  if (positiveArr.length > negativeArr.length) {
    for (let i = 0; i < negativeArr.length; i++) {
      result[2 * i] = positiveArr[i];
      result[2 * i + 1] = negativeArr[i];
    }
    let idx = negativeArr.length * 2;
    for (let i = negativeArr.length; i < positiveArr.length; i++) {
      result[idx] = positiveArr[i];
      idx += 1;
    }

    //
    //
    //  IF NEGATIVE >>> POSITIVE  OR EQUAL
  } else {
    for (let i = 0; i < positiveArr.length; i++) {
      result[2 * i] = positiveArr[i];
      result[2 * i + 1] = negativeArr[i];
    }
    let idx = positiveArr.length * 2;
    for (let i = positiveArr.length; i < negativeArr.length; i++) {
      result[idx] = negativeArr[i];
      idx += 1;
    }
  }

  return result;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4, 4, 4, 2]));
console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
console.log(rearrangeArray([3, 1, -2, -5, 2, -4, -4, -4, -2]));
