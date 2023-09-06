def selection_sort(arr)
  # type your code in here

  # create output array
  # find minimum of input array
  # push minimum to output array
  # slice minimum from input array
  # stop when input array is empty
  # return output array

  output = []

  while arr.length > 0 do
    min = arr.min
    output.push(min)
    arr.delete_at(arr.find_index(min))
  end

  return output
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort([3, -1, 5, 2])
  puts

  puts "Expecting: [-8, -1, 2, 2, 3, 5]"
  print "=> "
  print selection_sort([3, -1, 5, 2, -8, 2])
  puts

  puts "Expecting: [8, 8, 8, 8]"
  print "=> "
  print selection_sort([8, 8, 8, 8])
  puts

  # Don't forget to add your own!

  # BENCHMARK HERE, you can print the average runtime
  long_input = []
  start_time = Time.now

  100.times { long_input << rand }

  1000.times do
    selection_sort([3, 77, 2])
    selection_sort(long_input)
  end

  current_time = Time.now

  puts("average runtime #{(current_time - start_time) / 2000}")
end

# Please add your pseudocode to this file
# And a written explanation of your solution
