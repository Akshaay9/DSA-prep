//  https://leetcode.com/problems/binary-tree-maximum-path-sum/description/


const recurse = (tree, ans) => {
    if (
      tree === null ||
      tree === undefined ||
      tree.val === null ||
      tree.val === undefined
    ) {
      return 0;
    }
  
    let left = 0;
    let right = 0;
  
    if (tree.left) {
      left = Math.max(0, recurse(tree.left, ans)); // to avoid taking -ve so Math.max
    }
  
    if (tree.right) {
      right = Math.max(0, recurse(tree.right, ans));
    }
  
    ans.ans = Math.max(ans.ans, tree.val + left + right);
    return Math.max(left, right) + tree.val;
  };
  
  var maxPathSum = function (root) {
    const ans = { ans: -Infinity };
    recurse(root, ans);
    return ans.ans;
  };