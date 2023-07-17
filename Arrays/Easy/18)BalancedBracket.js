const balanceBracks = (brackets) => {
    const closedBracketMappingg = {
      "}": "{",
      "]": "[",
      ")": "(",
    };
    const stack = [];
  
    for (let i = 0; i < brackets.length; i++) {
      const currBracket = brackets[i];
      if (closedBracketMappingg[currBracket]) {
        const lastPushedBracked = stack.pop();
        if (lastPushedBracked !== closedBracketMappingg[currBracket]) {
          return false;
        }
      } else {
        stack.push(currBracket);
      }
    }
    return stack.length === 0;
  };
  
  console.log(balanceBracks("({})[]"));
  