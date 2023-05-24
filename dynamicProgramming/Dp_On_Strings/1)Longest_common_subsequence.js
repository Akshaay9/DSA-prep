//  totoal subsequence of string is always --> 2^n

const recursion = (str1, str2, idx1, idx2, len1, len2, map) => {
    if (idx1 >= len1 || idx2 >= len2) {
      return 0;
    }
  
    const key = `${idx1}_${idx2}`;
    if (map?.[key] !== undefined) {
      return map[key];
    }
  
    const str1Val = str1[idx1];
    const str2Val = str2[idx2];
  
    let ans = 0;
  
    if (str1Val === str2Val) {
      ans = 1 + recursion(str1, str2, idx1 + 1, idx2 + 1, len1, len2, map);
    }
    const moveTextOne = recursion(str1, str1, idx1 + 1, idx2, len1, len2, map);
  
    const moveTextTwo = recursion(str1, str1, idx1, idx2 + 1, len1, len2, map);
  
    const answer = Math.max(moveTextOne, moveTextTwo, ans);
    map[key] = answer;
  
    return answer;
  };
  
  var longestCommonSubsequence = function (text1, text2) {
    return recursion(text1, text1, 0, 0, text1.length, text2.length, {});
  };
  
  const text1 = "abcde",
    text2 = "ace";
  
  console.log(longestCommonSubsequence(text1, text2));
  