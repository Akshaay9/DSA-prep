const recurse = (triangle, triangleIdx, idx, map) => {
    const traingleIDXLen = triangle[triangleIdx]?.length;
  
    if (triangleIdx === triangle.length - 1) {
      return triangle[triangleIdx][idx];
    }
    if (triangleIdx >= triangle.length) {
      return Infinity;
    }
  
    if (idx >= traingleIDXLen) {
      return Infinity;
    }
  
    const key = `${idx}_${triangleIdx}`;
    if (map[key] !== undefined) {
      return map[key];
    }
  
    const sameIDXTriangleNum = triangle[triangleIdx][idx];
  
    let moveSame = Infinity;
    let differentMove = Infinity;
  
    moveSame = sameIDXTriangleNum + recurse(triangle, triangleIdx + 1, idx, map);
  
    differentMove =
      sameIDXTriangleNum + recurse(triangle, triangleIdx + 1, idx + 1, map);
  
    const ans = Math.min(moveSame, differentMove);
    map[key] = ans;
    return ans;
  };
  
  var minimumTotal = function(triangle) {
      return recurse(triangle, 0, 0,{});
      
  };