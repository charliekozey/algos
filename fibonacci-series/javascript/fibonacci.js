function fibonacci(num) {
  // input: num representing nth element of series (int; zero-indexed)
  // output: the value of that element of the series (int)

  let series = [0, 1];
  let nthValue = 0;

  for (let i = 1; i < num; i++) {
    let last = series[series.length-1];
    let secondLast = series[series.length-2]; 
    let nextValue = last + secondLast;

    series = [...series, nextValue];

    nthValue = nextValue;
  }

  return nthValue;
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

  console.log("Expecting: some huge integer");
  console.log("=>", fibonacci(900));

  console.log("");

  console.log("Expecting: 89");
  console.log("=>", fibonacci(11));

  console.log("");

  console.log(`Expecting: ${55+89}`);
  console.log("=>", fibonacci(12));

  console.log("");
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
