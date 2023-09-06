function findShortestString(arr) {

  let shortest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    }
  }
  return shortest;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  console.log("Expecting: 'green'");
  console.log("=>", findShortestString(['green']));

  console.log("Expecting: 'red'");
  console.log("=>", findShortestString(['red', 'red', 'red']));

  // BENCHMARK HERE

  // set start time
  const starTime = Date.now()
  // intialize long input array
  let longInputArray = []

  let r = (Math.random() + 1).toString(26).substring(2);
  console.log("random", r);

  // // create long input array
  // for (let i = 0; i < 100; i++) {
  //   let randomString = 
  // }


}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
