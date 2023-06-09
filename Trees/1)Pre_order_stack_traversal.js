const preorderTraversal = (tree) => {
    const stack = [];
    const ans = [];
    if (tree?.val === undefined || tree?.val === null) return ans;
  
    stack.push(tree);
  
    while (stack?.length !== 0) {
      
      const lastEle = stack[stack.length - 1];
      stack.pop();
      ans.push(lastEle?.val);
      if (lastEle?.right) {
        stack.push(lastEle?.right);
      }
      if (lastEle?.left) {
        stack.push(lastEle?.left);
      }
    }
    return ans;
  };