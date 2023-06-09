const recurse = (tree) => {
    if (tree === null) return true;
  
    const left = recurse(tree?.left);
    const right = recurse(tree?.right);
  
    if (Math.abs(left - right) > 1) {
      return -1;
    }
    return 1 + Math.max(left, right);
  };
  
  const isBalanced = (tree) => {
    const ans = recurse(tree);
    if (ans === -1) {
      return false;
    }
    return true;
  };