var isSameTree = function (p, q) {
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
      console.log("r");
      return false;
    }
    if (Number(currPVal) !== Number(currQVal)) {
      return false;
    }
  
    return isSameTree(p?.left, q?.left) && isSameTree(p?.right, q?.right);
  };