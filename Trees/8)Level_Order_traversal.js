var levelOrder = function (root) {
    if (!root) return [];
const result = [];

const stack = [];
stack.push(root);

while (stack.length) {
  const size = stack.length;
  const values = [];
  for (let i = 0; i < size; i++) {
    const firstEle = stack.shift();
    values.push(firstEle?.val);
    if (firstEle?.left) {
      stack.push(firstEle.left);
    }
    if (firstEle?.right) {
      stack.push(firstEle.right);
    }
  }
  result.push(values);
}

return result;
};