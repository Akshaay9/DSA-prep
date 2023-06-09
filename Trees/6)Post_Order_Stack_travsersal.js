const postorderTraversal = (arr) => {
    const ans = [];
    const stack = [];
  
    if (arr === null) return ans;
    stack.push(arr);
  
    while (stack.length !== 0) {
      const lastEle = stack[stack.length - 1];
      stack.pop();
      ans.push(lastEle?.val);
      if (lastEle.left!=null) {
        stack.push(lastEle.left);
      }
      if (lastEle.right!=null) {
        stack.push(lastEle.right);
      }
    }
  
    return ans.reverse()
  };