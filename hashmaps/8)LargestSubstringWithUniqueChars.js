const lengthOfLongestSubstring = (str) => {
    let release = 0;
    const map = new Map();
    let ans = 0;
  
    for (let i = 0; i < str.length; i++) {
      const currChar = str[i];
  
      while (map.has(currChar) && release <= i) {
        const releaseChar = str[release];
        
          map.delete(releaseChar);
        
        release += 1;
      }
      map.set(currChar, 1);
      const tempAns = i - release + 1;
      ans=Math.max(tempAns,ans)
    }
    return ans;
  };