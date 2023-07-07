var recurse = function (p, q) {
    const currPVal = p?.val;
    const currQVal = q?.val;
    if (
      (currPVal === null && currQVal === null) ||
      (currPVal === undefined && currQVal === undefined)
    ) {
      return true;
    }
  
    if (
      currPVal === null ||
      currQVal === null ||
      currPVal === undefined ||
      currQVal === undefined
    ) {
      return false;
    }
    if (Number(currPVal) !== Number(currQVal)) {
      return false;
    }
  
    return recurse(p?.left, q?.right) && recurse(p?.right, q?.left);
  };
  const isSymmetric = (tree1) => {
    return recurse(tree1?.left, tree1?.right);
  };