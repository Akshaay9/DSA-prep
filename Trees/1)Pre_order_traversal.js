class Node {
    constructor(val) {
      this.val = val;
    }
  }
  
  function createTree(data) {
    const targets = [[]];
    let head;
  
    data.forEach((val, i) => {
      const node = new Node(val),
        [target, side] = targets[i];
      targets.push([node, "left"], [node, "right"]);
  
      if (!target) head = node;
      else if (val !== null) target[side] = node;
    });
  
    return head;
  }
  
  const tree = createTree([1,null,2,3]);
  
  
  // 
  const recurse = (tree, result) => {
    if (tree?.val === undefined || tree?.val === null) {
      return;
    }
    result.push(tree.val);
    recurse(tree.left, result);
    recurse(tree.right, result);
  };
  
  const preorderTraversal = (tree) => {
    const result = [];
    recurse(tree, result);
    return result;
  };
  
  