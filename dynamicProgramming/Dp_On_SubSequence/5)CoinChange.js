// IF TARGET REACHED --> 0
// IF TARGET NOT REACHED -->INFINITY

const recurse = (coins, amount, idx, map) => {
    const key = `${amount}_${idx}`;
  
    if (map?.[key] !== undefined) {
      return map[key];
    }
  
    if (amount === 0) {
      return 0;
    }
  
    if (amount < 0 || idx >= coins.length) {
      return Infinity;
    }
  
    const currCoin = coins[idx];
  
    let consider = Infinity;
  
    if (currCoin <= amount) {
      consider = 1 + recurse(coins, amount - currCoin, idx, map);
    }
    let notConsider = recurse(coins, amount, idx + 1, map);
    const ans = Math.min(notConsider, consider);
    map[key] = ans;
    return ans;
  };
  
  var coinChange = function (coins, amount) {
    const map = {};
    const ans = recurse(coins, amount, 0, map);
    if (ans === Infinity) {
      return -1;
    }
    return ans;
  };
  
  console.log(coinChange([1, 2, 5], 11));
  