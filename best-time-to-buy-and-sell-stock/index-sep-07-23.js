// /**
//  * @param {number[]} prices
//  * @return {number}
//  */

// // input: `prices` = []
// //// a list of prices on consecutive days
// //// `price[i]` == price of stock on day `i`

// // GOAL:
// //// maximize profit by finding the optimal two days (one buy day, one sell day)
// //// such that 
// //// 1. the difference between the buy and sell day are greater than any other two days
// //// 2. AND we want the buy day to be lower
// //// (sell day must occur after buy day)

// // output:
// //// return the maximum profit you can achieve
// //// if you can't achieve profit, return 0

// // constraints:
// //// length of prices array between 1 and really big
// //// value of prices between 0 and really big

/////////////// FIRST ATTEMPT, NOT SUCCESSFUL ////////////////////////

// const example1 = [7, 200, 3, 6, 4]
// const example2 = [7, 6, 4, 3, 1]
// const example3 = [0]

// var maxProfit = function(prices) {
//     let profits = []

//     while (prices.length > 1) {
//         const left = prices[0]
//         const right = prices[prices.length - 1]
//         const profit = right - left

//         if (profit >= 0) {
//             profits.push(profit)
//             prices.pop()
//         } else {
//             prices.shift()
//         }

//         console.log("------------------")
//         console.log("profits:", profits)
//         console.log("prices:", prices)
//         console.log("left:", left)
//         console.log("right:", right)
//         console.log("profit:", profit)
//         console.log("")
//     }

//     if (Math.max(...profits) === -Infinity) return 0

//     return Math.max(...profits)
// };

// console.log(maxProfit(example1))









//////////////////// SECOND ATTEMPT AFTER FINDING SOLUTION ///////////////////
//// Solution that helped me understand: https://archive.ph/hWNWQ ////////////

// STRATEGY
//// 1. Keep track of:
////// - Lowest price so far (initialize as `prices[0]`)
////// - Biggest profit so far (initialize as 0; will return if none found)
//// 2. Loop through `prices` once.
//// 3. If the current price is lower than the minPrice, make that the new minPrice
//// 4.  If the current potential profit (currentPrice - minPrice) is bigger than the
//// maxProfit, make that the new maxProfit
//// 5. Return maxProfit

function maxProfit(prices) {
    let minPrice = prices[0]
    let maxProfit = 0
    
    for (let i=0; i < prices.length; i++) {
      const currPrice = prices[i]
      const potentialProfit = currPrice - minPrice
      
      if (currPrice < minPrice) minPrice = currPrice
      if (potentialProfit > maxProfit) maxProfit = potentialProfit
    }
    
    return maxProfit
  }
  
  console.log(maxProfit([1, 2, 3, 4, 10]))