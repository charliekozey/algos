function findFirstDuplicate(arr) {
  // input: an array
  // output: return one integer, the first duplicate value. if none, return -1
  // create empty array of checked numbers
  // loop through array (for loop)
  // // is current number in checked numbers array? (.includes)
  // // if yes: return current number, end the loop (break)
  // // if no: insert current number into checked numbers array

  const checkedNumbers = [];
  let output = -1;

  for (let i = 0; i < arr.length; i++) {
    if (checkedNumbers.includes(arr[i])) {
      output = arr[i];

      return output;
    } else {
      checkedNumbers.push(arr[i]);
    }
  }

  return output;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: 0");
  console.log("=>", findFirstDuplicate([0, 0, 0]));

  console.log("");

  console.log("Expecting: 0");
  console.log("=>", findFirstDuplicate([2, 0, 0, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -8");
  console.log("=>", findFirstDuplicate([-5, 6, -8, 7, 0, -8]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([]));
  
  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
