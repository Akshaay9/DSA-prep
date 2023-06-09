const preorderTraversal = (tree, result) => {
    if (tree?.val === undefined || tree?.val === null) {
      return;
    }
    result.push(tree?.val);
  
    for (let i = 0; i < tree.children.length; i++) {
      preorderTraversal(tree.children[i],result);
    }
  };
  
  const preorder = (tree) => {
    const result = [];
    preorderTraversal(tree, result);
    return result;
  };