# []                                -->  "no one likes this"
# ["Peter"]                         -->  "Peter likes this"
# ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
# ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
# ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

# Note: For 4 or more names, the number in "and 2 others" simply increases.

# input: array of 0 or more names
# output: string, as outlined above

def who_likes_it(likers):
    output = "no one likes this"
    for liker in likers:
        if (len(likers) == 1):
            output = f"{liker} likes this"
    return output

print(who_likes_it(["Peter"]))