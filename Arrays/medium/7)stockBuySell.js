// minDayeToBy -> it find the min day to buy the stock
// maxBySell -> buy finding min and keeping it, we can find maximum

const maxProfit = (arr) => {
  let minDayeToBy = Infinity;
  let maxBySell = 0;

  for (let i = 0; i < arr.length; i++) {
    minDayeToBy = Math.min(minDayeToBy, arr[i]);
    // find the max by checking sell-buy since buy is alredy min on top variable
    maxBySell = Math.max(maxBySell, arr[i] - minDayeToBy);
  }
  return maxBySell;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
