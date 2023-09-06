def solution(nums):
    # input: ordered list of numbers, some consecutive, some not
    # output: string representing ordered list, except those that are continuous (3 or more) are expressed as ranges

    # approach: stack, LIFO

    output_list = []
    stack = []
    
    if abs(nums[1] - nums[0]) == 1:
        stack.append(num    s[0])
    else:
        output_list.append(nums[0])

    for i, current in enumerate(nums[1::]):
        
        prev = nums[i - 1]
        difference = abs(current - prev)

        if difference != 1:
            output_list.append(current)
        else:
            stack.append(current)
        
        if len(stack) >= 2:
            last = stack[-1]
            second_last = stack[-2]
            end_difference = abs(last - second_last)
            
            if end_difference != 1:
                output_list.append(*stack)
                stack.clear()
        
    return output_list


print(solution([-6,-3,-2,-1,0,1,3,4,5,7,8,9,10,11,14,15,17,18,19,20]))