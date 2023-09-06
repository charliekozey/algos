def fibonacci(num)
  series = [0, 1]
  nth_value = 0

  for i in 1..num-1 do
    last = series[series.length-1]
    second_last = series[series.length-2]
    next_value = last + second_last

    series.concat([next_value])

    nth_value = next_value
  end

  nth_value
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
