## Strategies and Patterns

### Iterate once while keeping track of global max/mins
Rather than comparing each element to every other element, keep track of relevant max/mins as you go
- Benefits:
    - Saves time compared to nested loops
- Used in:
    - Best Time to Buy and Sell Stock

### Two pointer
Can be for loop with two variables:
```js
for (let i=0, j=arr.length-1; i <= j; i++, j--){
    // ...
}
```
Or while loop with left/right:
```js
let left = 0
let right = 0

while (left <= right) {
    // ...
    left ++
    right --
}
```
- Benefits:
    - Saves space compared to creating a new array to track values
- Used in:
    - Valid Palindromes

### Edit input in place
Can use regex, .replace() (or equivalent)

- Benefits:
    - Saves time and space compared to creating a new entity
- Used in:
    - Valid Palindromes