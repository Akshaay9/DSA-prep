// Initialize i with 1 since we alrdy consider val and count as first element
// if currEle equal to val then increase count or deacrease count 
// if it becomes zero then initialize it

var majorityELe = function (arr) {
  let val = arr[0];
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (val === arr[i]) {
      count += 1;
    } else {
      count -= 1;
    }

    if (count === 0) {
      val = arr[i];
      count = 1;
    }
  }
  return val;
};

console.log(majorityELe([3, 2, 3]));
