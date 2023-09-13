// NAIVE SOLUTION /////////////////////////////

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    for (const char of t){
        s = s.replace(char, "")
        console.log(char)
        console.log(s)
    }

    return s === ""
};

console.log(isAnagram("tutor", "trout"))

// TIME COMPLEXITY: at least O(n^2) because .replace() causes an iteration
// SPACE COMPLEXITY: O(1)