https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/hashmap-and-heaps/count-of-substrings-having-all-unique-characters-official/ojquestion

const countAllSubStringUniqueChar = (str) => {
  let release = 0;
  const map = new Map();
  let ans = 0;

  for (let i = 0; i < str.length; i++) {
    const currChar = str[i];

    while (map.has(currChar) && release <= i) {
      const releaseChar = str[release];
      map.set(releaseChar, map.get(releaseChar) - 1);
      if (map.get(releaseChar) == 0) {
        map.delete(releaseChar);
      }
      release += 1;
    }
    map.set(currChar, 1);
    ans += i - release + 1;
  }
  return ans;
};

console.log(countAllSubStringUniqueChar("abcabcbb"));
