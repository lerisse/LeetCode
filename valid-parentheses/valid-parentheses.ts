function isValid(s: string): boolean {
    // can't start with closing bracket
    // if ending list is empty, return true as all pairs will be removed
    // remove opening brackets based on clothing
    // O(n)
    // O(n) mem
  const hash: { [key: string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack: string[] = [];

  for (const char of s) {
    if (char in hash) stack.push(char);
    else {
      const top = stack.pop();
      if (top === undefined || hash[top] !== char) {
        return false;
      }
    }
  }

  return !stack.length;
}