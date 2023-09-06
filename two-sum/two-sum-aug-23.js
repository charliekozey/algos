/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // input: array of numbers, target number (all integers)
    // output: array of indices of the numbers that add to target
    // exactly one solution

    // One loop
    // For each number in array, keep track of its value and the difference between
    // it and the target number using hashmap. If the difference exists in the hashmap,
    // return the index of the current number and the number that matches the difference.

    let hashmap = {}

    for(let i = 0; i < nums.length; i++) {
        console.log(typeof i)
        const current = nums[i]
        const difference = target - current
        
        console.log("current: " + current + ", difference: " + difference)
        console.log(hashmap)
        if (difference in hashmap) {
            return [parseInt(i), parseInt(hashmap[difference])]
        }
        hashmap[current] = i
    }

};

console.log(twoSum([3, 3], 6))