const recurce = (root, map, level, result) => {
    if (root?.val === undefined || root?.val === null) {
      if (!map.has(level)) {
        map.set(level, root?.val);
        result.push(root?.val);
      }
      return;
    }
  
    if (!map.has(level)) {
      map.set(level, root?.val);
      result.push(root?.val);
    }
  
    if (root.right) {
      recurce(root.right, map, (level += 1), result);
    }
    if (root.left) {
      recurce(root.left, map, (level -= 1), result);
    }
  };
  
  var rightSideView = function (root) {
    if(!root) return []
    const map = new Map();
  
    const result = [];
    recurce(root, map, 0, result);
  
    return result;
  };