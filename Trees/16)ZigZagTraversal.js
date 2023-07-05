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
  
  const tree = createTree([3, 9, 20, null, null, 15, 7]);
  
  const levelOrderTraversal = (tree) => {
    let count = 0;
    const result = [];
    const stack = [];
    if (!tree) return null;
    stack.push(tree);
  
    while (stack.length !== 0) {
      const values = [];
      const len = stack.length;
      for (let i = 0; i < len; i++) {
        const firstEle = stack.shift();
        if (count % 2 == 0) {
          values.push(firstEle.val);
        } else {
          values.unshift(firstEle.val);
        }
  
        if (firstEle.left) {
          stack.push(firstEle.left);
        }
        if (firstEle.right) {
          stack.push(firstEle.right);
        }
      }
      count += 1;
      result.push(values);
    }
  
    return result;
  };
  
  console.log(levelOrderTraversal(tree));
  