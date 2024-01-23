# Algo Strategies and Patterns

## Definitions

### Space Complexity
Can depend on: 
- data structures that grow in some proportion to input
- a call stack that grows in some proportion to input

## Strategies

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

while (left < right) {
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

### Recursion
Works well for fractal things (e.g. trees) — that is, things whose zoomed-in pieces look similar to the zoomed-out whole
- Used in:
    - Invert Binary Tree

### Depth-First Search
Uses recursion to reach the lowest node of one branch of a tree, then progresses to subsequent branches
- Used in:
    - Invert Binary Tree

### Breadth-First Search
Uses a queue data structure (First in, first out):
![Diagram of queue data structure: a row of 5 purple triangles arranged back to front (left to right). A new rectangle enters the queue (enqueues) from the left (back). Another rectangle leaves the queue from the right (front).](https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/440px-Data_Queue.svg.png)