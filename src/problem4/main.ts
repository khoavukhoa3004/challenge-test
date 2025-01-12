//Problem 4

/** 
 * First approach: use the native for loop to iterate from 1 to n and sum the numbers.
 * Time complexity: O(n)
 * Space complexity: O(1)
 * Comment: This approach is not the best one because it has a time complexity of O(n), and the implementation is not elegant.
 */
const sumToNA = (n: number): number => {
  if (n < 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

/**
 * 
 * Second approach: use recursion to sum the numbers from 1 to n.
 * Time complexity: O(n)
 * Space complexity: O(n)
 * Comment: This approach is not better than the native loop approach 
 * in sumToNA, because it has the same time complexity of O(n) and a space complexity of O(n).
 * But it can perform the solution to break the problem into smaller subproblems. 
 * And, in this current context, I implemented because the description ask me to implement 3 different solutions.
 */
const sumToNB = (n: number): number => {
  if (n <= 0) {
    return 0;
  }
  return n + sumToNB(n - 1);
};

/**
 * Third approach: use mathematical formula to sum the numbers from 1 to n.
 * The formula: Sigma_{i:1->n} i = 1 + 2 + 3 + ... + n = n * (n + 1) / 2
 * Time complexity: O(1)
 * Space complexity: O(1)
 * Comment: The best approach to solve this problem is to use the mathematical formula,
 */
const sumToNC = (n: number): number => {
  if (n < 0) {
    return 0;
  }
  return (n * (n + 1)) / 2;
};

console.log(sumToNA(5));
console.log(sumToNB(5));
console.log(sumToNC(5));
