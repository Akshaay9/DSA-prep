const twoSum = (arr, k) => {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
      const currEle = arr[i];
      if (map.has(k - currEle)) {
        return [i, map.get(k - currEle)];
      } else {
        map.set(currEle, i);
      }
    }
    return [];
  };
  
  console.log(twoSum([2, 7, 11, 15], 9));
  