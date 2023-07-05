const recurse = (root, val, result) => {
    if (root?.val === undefined || root?.val === null) {
      return;
    }
  
    if (root?.val !== val) {
      result.result = false;
    }
    recurse(root?.left, val, result);
    recurse(root?.right, val, result);
  };
  
  var isUnivalTree = function (root) {
    const val = root?.val;
    const result = { result: true };
    recurse(root, val, result);
  
    return result.result;
  };