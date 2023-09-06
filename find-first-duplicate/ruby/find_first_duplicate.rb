def find_first_duplicate(arr)
#  // input: an array
#  // output: return one integer, the first duplicate value. if none, return -1
#  // create empty array of checked numbers
#  // set output to -1
#  // loop through array (for i in 0..array.length-1)
#  // // is current number in checked numbers array? (.contains)
#  // // if yes: return output, end the loop
#  // // if no: insert current number into checked numbers array
#  // return output

  checked_numbers = []

  for i in 0..arr.length-1 do 
    if checked_numbers.include? arr[i]
      return arr[i]
    else
      checked_numbers.push arr[i]
    end
  end

  -1
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  puts 

  puts "Expecting: 0"
  puts "=>", find_first_duplicate([0, 0, 0])

  puts

  puts "Expecting: 0"
  puts "=>", find_first_duplicate([2, 0, 0, 3, 3, 2])

  puts

  puts "Expecting: -8"
  puts "=>", find_first_duplicate([-5, 6, -8, 7, 0, -8])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([])
  
  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
