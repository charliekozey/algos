function findShortestStringRecursive(arr) {
  // type your code here

  // input: array of strings
  // output: the shortest string found in the array

  // base case: empty array

  if (arr.length <= 1) {
    return arr[0];
  }
  
  const output = findShortestStringRecursive(arr.slice(1));

  return arr[0].length <= output.length ? arr[0] : output;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
