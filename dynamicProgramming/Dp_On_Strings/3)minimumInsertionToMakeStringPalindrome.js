const recurse = (str1, str2, idx1, idx2, str1Len, str2Len, map) => {
    if (idx1 >= str1Len || idx2 >= str2Len) {
      return 0;
    }
  
    let ans = 0;
  
    const key = `${idx1}_${idx2}`;
    if (map[key] !== undefined) {
      return map[key];
    }
  
    let stringOneVal = str1[idx1];
    let strTwoVal = str2[idx2];
  
    if (stringOneVal === strTwoVal) {
      ans = 1 + recurse(str1, str2, idx1 + 1, idx2 + 1, str1Len, str2Len, map);
    }
    const moveStrOne = recurse(str1, str2, idx1 + 1, idx2, str1Len, str2Len, map);
    const moveStrTwo = recurse(str1, str2, idx1, idx2 + 1, str1Len, str2Len, map);
  
    const finalAns = Math.max(ans, moveStrOne, moveStrTwo);
    map[key] = finalAns;
    return finalAns;
  };
  
  var minInsertions = function (s) {
    const longestPalindromicSubString = recurse(
      s,
      s.split("").reverse().join(""),
      0,
      0,
      s.length,
      s.length,
      {}
    );
  
    return s.length - longestPalindromicSubString;
  };
  
  console.log(minInsertions("dyyuyabzkqaybcspq"));
  