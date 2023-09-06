/**
 * @param {string} s
 * @return {boolean}
 */

// input: string of square, curly, normal parentheses
// output: boolean
// valid if: 
//// open brackets are closed by same type of bracket
//// open brackets are closed in correct order
//// every close bracket has corresponding open bracket
//// nested parentheses are valid
// constraints:
//// string can contain the 3 types of brackets and nothing else

var isValid = function (string) {
    const bracketStack = []
    const pairs = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    for (let i = 0; i < string.length; i++) {
        const currentChar = string[i]
        const lastIn = bracketStack[bracketStack.length - 1]

        if (lastIn && lastIn == pairs[currentChar]) {
            bracketStack.pop()
        } else {
            bracketStack.push(currentChar)
        }
    }

    return !bracketStack.length
}