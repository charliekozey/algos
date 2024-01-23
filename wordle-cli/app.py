import sys

# output: a string
#   - correct letter, correct place: capital
#   - correct letter, wrong place: lowercase
#   - wrong letter: underscore
# have a word to guess
# get user input
# evaluate input
# return status

# MVP: 
#  - hardcode answer
#  - get user input
#  - tell if user guessed word

answer = "sassy"
attempt_count = 0
output_block = ""

print("welcome to pyWordle")
print("guess a 5-letter word:")
input = input().lower()

def check_guess(guess):
    output = ""
    for i in range(len(guess)):
        if  guess[i] == answer[i]:
            output += guess[i].upper()
        elif guess[i] in answer:
            output += guess[i].lower()
        else:
            output += "_"
    output_block += f"\n{output}" 
    attempt_count = attempt_count + 1
    print(output_block)

while attempt_count < 5:
    check_guess(input)