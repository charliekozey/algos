def two_sum(numbers, target):
    map = {}
    for i in range(len(numbers)):
        difference = target - numbers[i]
        # If the difference exists in the list...
        if difference in numbers[:i]:
            # return current index and index of difference.
            return [i, numbers.index(difference)]
        else:
            # Else, insert the difference and the index of current num as a key-value pair.
            map[difference] = i

print(two_sum([2, 5, 7, 11, 15], 18))