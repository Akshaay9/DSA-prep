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
  
  const printLowestToHighestVal = (map) => {
    let min = Infinity;
    let max = -Infinity;
    const result = [];
    for (let [key, value] of map) {
      if (key < min) {
        min = key;
      }
      if (key > max) {
        max = key;
      }
    }
    for (let i = min; i <= max; i++) {
      result.push(map.get(i));
    }
    return result;
  };
  
  const printTopView = (tree) => {
    const stack = [];
    const map = new Map();
    stack.push({ tree, level: 0 });
  
    while (stack.length !== 0) {
      const len = stack.length;
      for (let i = 0; i < len; i++) {
        const firstEle = stack.pop();
        const { tree, level } = firstEle;
  
        map.set(level, tree.val);
  
        if (firstEle.tree.left) {
          stack.push({ tree: firstEle.tree.left, level: firstEle.level - 1 });
        }
        if (firstEle.tree.right) {
          stack.push({ tree: firstEle.tree.right, level: firstEle.level + 1 });
        }
      }
    }
    return printLowestToHighestVal(map);
  };
  
  console.log(printTopView(tree));
  