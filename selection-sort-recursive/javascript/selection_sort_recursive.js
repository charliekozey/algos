function selectionSortRecursive(arr) {

  // create base condition: return empty array if arr length is 0
  // create output array
  // find and remember lowest value in arr
  // remove lowest value in arr
  // call self on arr
  // unshift lowest value to output

  if (arr.length === 0) return [];

  const min = Math.min(...arr);
  const index = arr.indexOf(min);
  arr.splice(index, 1);

  const output = selectionSortRecursive(arr);
  output.unshift(min);
  console.log("meep", output);
  return output;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
