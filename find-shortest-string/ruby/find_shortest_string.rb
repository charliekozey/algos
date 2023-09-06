def find_shortest_string(arr)

  # set shortest string to be the first string in the array
  shortest = arr[0]

  # loop through each string of the array
  for i in 0..arr.length-1 do
    # test if the current string is shorter than the starter string
    if arr[i].length < shortest.length
      # if so, set the shortest string to be the current string
      shortest = arr[i]
    end
    # if not, do nothing and move to next string
  end

  # # output the shortest string to the console
  # puts shortest
  # return shortest string
  return shortest
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'a'"
  puts "=>", find_shortest_string(['aaa', 'a', 'bb', 'ccc'])

  puts

  puts "Expecting: 'hi'"
  puts "=>", find_shortest_string(['cat', 'hi', 'dog', 'an'])

  puts

  puts "Expecting: 'lily'"
  puts "=>", find_shortest_string(['flower', 'juniper', 'lily', 'dadelion'])

  puts

  puts "Expecting: 'green'"
  puts "=>", find_shortest_string(['green'])

  puts

  puts "Expecting: 'red'"
  puts "=>", find_shortest_string(['red', 'red', 'red', 'red'])

  # Don't forget to add your own!

  # BENCHMARK HERE

  start_time = Time.now

  long_test_arr = []

  # create long test array
  100.times do
    # create random string between 1 and 7 letters long
    random_string = (1..rand(1..7)).map { ('a'..'z').to_a[rand(26)] }.join
    # push random string to long test array
    long_test_arr.push(random_string)
  end

  # test method with short and long inputs many times
  1000.times do
    puts find_shortest_string(['banana', 'apple', 'kiwi'])
    puts find_shortest_string(long_test_arr)
  end

  # set the time after running the methods
  current_time = Time.now

  # return the average time for each run
  puts (current_time - start_time)/2000
end

# Please add your pseudocode to this file
# And a written explanation of your solution
