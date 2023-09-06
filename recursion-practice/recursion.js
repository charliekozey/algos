function callMyself(n) {
    if (n <= 1) {
        return "done"
    }
    
    return callMyself(n - 1)
}

console.log(callMyself(4))
