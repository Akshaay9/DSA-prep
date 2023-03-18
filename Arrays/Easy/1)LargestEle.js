// https://takeuforward.org/data-structure/find-the-largest-element-in-an-array/

const largestELeInTheArray = (arr) => {
    let MAX_ELE = -Infinity;
    for (let num of arr) {
      if (num > MAX_ELE) {
        MAX_ELE = num;
      }
    }
    return MAX_ELE;
  };
  console.log(largestELeInTheArray([5, 6, 7, 5, 3, 2]));
s  