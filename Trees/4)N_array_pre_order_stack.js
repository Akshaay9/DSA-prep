const preorder = (arr) => {
    const ans = [];
    const stack = [];
  
    if (arr === null) return ans;
    stack.push(arr);
  
    while (stack.length !== 0) {
      const lastEle = stack[stack.length - 1];
      stack.pop();
      ans.push(lastEle?.val);
      const rootChldren = lastEle?.children || [];
      for (let i = rootChldren.length - 1; i >= 0; i--) {
        const currChildren = rootChldren[i];
        stack.push(currChildren);
      }
    }
  
    return ans;
  };