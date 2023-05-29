//  LONGEST COMMOM SUBSTRING

const longestCommonSubString = (str1, str2) => {
    const l1 = str1.length;
    const l2 = str2.length;
  
    const dp = Array(l1 + 1)
      .fill(0)
      .map(() => Array(l2 + 1).fill(0));
  
    let maxVal = 0;
  
    for (let i = 1; i <= l1; i++) {
      for (let j = 1; j <= l2; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = 1 + dp[i - 1][j - 1];
          maxVal = Math.max(dp[i][j], maxVal);
        }
      }
    }
    console.log(dp);
    return maxVal;
  };
  
  console.log(longestCommonSubString("javascript", "java"));
  