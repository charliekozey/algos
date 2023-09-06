function selectionSort(arr) {
  // type your code here

  // create output array
  // find minimum of input array
  // push minimum to output array
  // remove minimum from input array
  // stop when original array is empty
  // return output array

  let output = [];

  while (arr.length > 0) {
    const min = Math.min(...arr);
    arr.splice(arr.indexOf(min), 1); 
  }

  return output;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [5, 5, 5, 5]");
  console.log("=>", selectionSort([5, 5, 5, 5]));

  console.log("");

  console.log("Expecting: [-8, -1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2, -8]));

  console.log("");

  console.log("Expecting: [-1, 0, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 0, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  const startTime = Date.now();

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
    
  for (let i=1; i <= 1000; i++) {
    selectionSort([4, 7, 1]);
    selectionSort(longInput);
  }

  let currentTime = Date.now();

  console.log(`average runtime: ${(currentTime - startTime) / 2000}`)
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
