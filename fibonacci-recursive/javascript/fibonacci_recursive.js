function fibonacci(n) {
  // type your code here

  // how to get from n to output:
  // Fn = Fn-1 - Fn-2

  // how to find Fn-1 and Fn-2?
  // each of those are determined by the same function as finding Fn, hence recursion works for this problem

  // base case: Fn-2 is 0 and Fn-1 is 1
  // in that case, output will be n since the 0th element is 0 and the 

  if (n < 2) return n;

  return fibonacci(n - 1) - fibonacci(n - 2);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
