// const twoSum = function(nums, target) {
    
//     let outputIndices = [];
//     // loop through nums (i)
//         // for loop to check each subsequent num: (j) 
//         // true condition: set output to index of j, index of i (.push)
//     // output should be an array with two elements representing the indices of the two numbers that sum to the target number

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 outputIndices.push(i, j);
//             }
//         }
//     }

//     // console.log(outputIndices);
// }

// twoSum([2, 7, 11, 15], 26);

// // const example = [3, 6, 1, 7, 8, 14]

// // // CONSTANT --> O(1)
// // function returnFirstElement(array) {
// //     return array[0]
// // }

// // // LINEAR --> O(n)
// // function addOneToEachElement(array) {
// //     for (let i = 0; i < array.length; i++) {
// //         console.log(array[i] + 1)
// //     }
// // }

// // // addOneToEachElement(example)

// // // QUADRATIC --> O(n2)
// // const letters = ["A", "B", "C", "D", "E"]
// // const number = 1
// // function buildAChessBoard(num) {
// //     for (let i = 0; i < num; i++) {
// //         for (let j = 1; j <= num; j++) {
// //             console.log(letters[i] + j)
// //         }
// //     }
// // }



// const myNums = new Map()

// console.log(myNums)

function twoSum(nums, target) {
    const numsMap = new Map()

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i]
        const difference = target - currentNum

        if (numsMap.has(difference)) {
            // return index of the difference and index of the current num
            return [numsMap.get(difference), i]
        }
        else {
            // push into hashmap a new key-value pair: the current number and its index
            numsMap.set(nums[i], i)
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 26))