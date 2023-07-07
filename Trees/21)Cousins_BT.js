// https://leetcode.com/problems/cousins-in-binary-tree/description/

const recurse = (root, x, y, depth, parent, ans) => {
    const currVal = root?.val;
    console.log(currVal);
  
    if (Number(currVal) === x || Number(currVal) === y) {
      // console.log({ currVal, x, y, depth });
      // console.log(ans);
      ans[currVal].depth = depth;
      ans[currVal].parent = parent;
    }
    if (
      (root?.left === null && root?.right === null) ||
      (root?.left === undefined && root?.right === undefined)
    ) {
      return;
    }
    if (root?.left !== null && root?.left !== undefined) {
      recurse(root?.left, x, y, depth + 1, root?.val, ans);
    }
    if (root?.right !== null && root?.right !== undefined) {
      recurse(root?.right, x, y, depth + 1, root?.val, ans);
    }
  };
  
  var isCousins = function (root, x, y) {
    const ans = {
      [x]: {
        depth: null,
        parent: null,
      },
      [y]: {
        depth: null,
        parent: null,
      },
    };
    recurse(root, x, y, 0, null, ans);
    const { depth, parent } = ans[x];
    const { depth: newDepth, parent: newParent } = ans[y];
    if (
      depth !== null &&
      newDepth !== null &&
      parent !== null &&
      newParent !== null &&
      depth === newDepth &&
      parent !== newParent
    ) {
      return true;
    }
    return false;
  };