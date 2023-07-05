function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  
  const recurseTree = (root1, root2) => {
    if (root1?.val == null) {
      return root2;
    }
  
    if (root2?.val == null) {
      return root1;
    }
  
    const tree = new TreeNode(root1?.val+root2?.val)
    tree.left = recurseTree(root1?.left, root2?.left);
    tree.right = recurseTree(root1?.right, root2?.right);
    return tree;
  };
  
  var mergeTrees = function (root1, root2) {
    return recurseTree(root1, root2);
  };