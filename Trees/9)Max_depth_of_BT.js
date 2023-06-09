const maxDepth = (tree) => {
    if (tree?.val === null || tree?.val === undefined) return 0;
    const left = maxDepth(tree?.left);
    const right = maxDepth(tree?.right);
    return 1 + Math.max(left, right);
  };