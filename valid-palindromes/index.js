/**
 * @param {string} s
 * @return {boolean}
 */

// input: string to test
// output: boolean (is or is not valid palindrome)

// ignore spaces and punctuation
// alphanumeric characters only
// case-insensitive

//////// INITIAL STRATEGY //////////////////////
// 1. save alphanumeric characters to filter against
// 2. split string.toLowerCase() into array
// 3. filter array (does alphanumericChars include current char?)
// 4. let reversedString = "" 
// 5. reverse for loop through new array, concatenate char onto reversed string
// 6. join filteredArray into simplifiedString
// 7. return simplifiedString == reversedString

// var isPalindrome = function(string) {
//     const alphanumericChars = "qwertyuiopasdfghjklzxcvbnm1234567890"
//     const stringToArray = string.toLowerCase().split("")
//     const filteredArray = stringToArray.filter(char => alphanumericChars.includes(char))
//     const simplifiedString = filteredArray.join("")
//     let reversedString = ""

//     for (let i=0; i < filteredArray.length; i++) {
//         reversedString = filteredArray[i] + reversedString
//     }

//     return reversedString == simplifiedString
// };

// console.log(isPalindrome(""))

// ok this works

// Time Complexity: O(n) because there's one loop, so the run time scales 
// linearly with length of input string

// Space Complexity: (I *think*) O(n) because there are 4 variables that depend on the
// input. They all scale linearly with length of input string. For extremely large
// values of n, 4n should reduce to n

////// IMPROVED SOLUTION ///////////////////////////

// I think time complexity of O(n) is okay, but can definitely improve space complexity.
// After some research, using two pointer approach seems to be solid.
// It avoids having to store characters in memory in strings/arrays.

// Can use a while loop with left and right, or a for loop with two variables

var isPalindrome = function(string) {
    string = string.toLowerCase()
    string = string.replace(/[^0-9a-z]/gi, "")
    let left = 0
    let right = string.length - 1

    while (left < right) {
        if (string[left] !== string[right]) {
            return false
        } else {
            left ++
            right --
        }
    }

    return true
};

// Space: O(1) because we're not storing any new items in memory
// Time: O(n/2) because we're iterating for half the length of the string at most

console.log(isPalindrome(""))
