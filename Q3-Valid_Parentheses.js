// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

const isValid = (s) => {
  const stack = [];
  const keyValueBrackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (keyValueBrackets[c]) {
      stack.push(keyValueBrackets[c]);
    } else if (c !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};
console.log(isValid("[]{}()"));
console.log(isValid("[]{()"));
console.log(isValid("[]()()[]{}"));
console.log(isValid("[["));
