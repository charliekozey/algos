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

var isPalindrome = function(string) {
    const alphanumericChars = "qwertyuiopasdfghjklzxcvbnm1234567890"
    const stringToArray = string.toLowerCase().split("")
    const filteredArray = stringToArray.filter(char => alphanumericChars.includes(char))
    const simplifiedString = filteredArray.join("")
    let reversedString = ""

    for (let i=0; i < filteredArray.length; i++) {
        reversedString = filteredArray[i] + reversedString
    }

    return reversedString == simplifiedString
    
};

console.log(isPalindrome(""))

// ok this works

// Time Complexity: O(n) because there's one loop, so the run time scales 
// linearly with length of input string

// Space Complexity: (I *think*) O(n) because there are 4 variables that depend on the
// input. They all scale linearly with length of input string. For extremely large
// values of n, 4n should reduce to n