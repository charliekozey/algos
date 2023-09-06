def reverse_string(str)
  # # type your code in here
  # // 1. understand the problem
  # // ---- input: a string
  # // ---- output expected: that same string, reversed
  # // ---- don't use a built-in reverse method
  # // ---- use iteration
  # // 2. write tests
  # // ---- "iiii" => "iiii"
  # // ---- "yo dawg" => "gwad oy"
  # // ---- "" => "" 
  # // 3. pseudocode
  # // ---- tools needed: for loop iterating from end of array, += to append character
  # // ---- steps
  # // ---- create new empty string for output
  # // ---- iterate through string from end, appending each character to output string
  # // ---- return output string
  output = ""

  str.chars.each do |char|
    output = char + output
  end

  output
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  puts "Expecting: 'iiiiiiiiiiii'"
  puts "=>", reverse_string('iiiiiiiiiiii')

  puts

  puts "Expecting: ''"
  puts "=>", reverse_string('')

  puts "Expecting: ''"
  puts "=>", reverse_string('')
  
  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution