var invertTree = function (tree) {
    if (tree === null || tree === undefined) {
      return null;
    }
    const leftTree = invertTree(tree.left);
    const rigtTree = invertTree(tree.right);
    tree.left = rigtTree;
    tree.right=leftTree
    return tree;
  };