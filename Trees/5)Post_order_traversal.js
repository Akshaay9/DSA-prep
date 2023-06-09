const recurseTree = (root, result) => {
  if (root?.val === undefined || root?.val === null) {
    return;
  }
  recurseTree(root.left, result);
  recurseTree(root.right, result);
  result.push(root.val);
  return;
};

var postorderTraversal = function (root) {
  const result = [];
  recurseTree(root, result);
  return result;
};