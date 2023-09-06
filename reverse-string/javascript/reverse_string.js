function reverseString(str) {
  // 1. understand the problem
  // ---- input: a string
  // ---- output expected: that same string, reversed
  // ---- don't use a built-in reverse method
  // ---- use iteration
  // 2. write tests
  // ---- "iiii" => "iiii"
  // ---- "yo dawg" => "gwad oy"
  // ---- "" => "" 
  // 3. pseudocode
  // ---- tools needed: for loop iterating from end of array, += for appending character
  // ---- steps
  // ---- create new empty string for output
  // ---- iterate through string from end, appending each character to output string
  // ---- return output string

  let outputString = "";
  
  for (let i = str.length-1; i >= 0; i--) {
    outputString += str[i];
  }

  return outputString;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: 'iiii'");
  console.log("=>", reverseString("iiii"));

  console.log("");

  console.log("Expecting: 'gwad oy'");
  console.log("=>", reverseString("yo dawg"));

  console.log("");

  console.log("Expecting: ''");
  console.log("=>", reverseString(""));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
