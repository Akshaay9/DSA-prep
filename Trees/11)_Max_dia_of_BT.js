const recurse = (root, max) => {
    if (root?.val === null || root?.val === undefined) return 0;
  
    const left = recurse(root?.left, max);
    const right = recurse(root?.right, max);
    max.max = Math.max(left + right, max.max);
    return 1 + Math.max(left, right);
  };
  
  var diameterOfBinaryTree = function (root) {
    let max = {
      max: 0,
    };
    recurse(root, max);
  
    return max.max;
  };