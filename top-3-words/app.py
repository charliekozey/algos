def top_3_words(text):
    # We'll need the alphabet to eliminate any apostrophe-only strings:
    alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    # Convert all special characters to whitespace:
    sanitized_text = text.translate({ord(char): " " for char in """!@#"$%^&*()[]{};:,./<>?\|`~-=_+"""})
    # Split text into array of separate words (and lowercase them all):
    word_list = [word.lower() for word in sanitized_text.split()]
    # Get the set of unique words from the list:
    unique_words = set(word_list)
    # Initialize a dict to store word:count pairs:
    word_hash = {}
    
    # Loop through set of unique words:
    for word in unique_words:
        # Only run the operation on words that have letters in them...
        # (That is, skip over any apostrophe-only strings):
        if any(letter in word for letter in alphabet):
            # Add a new key-value pair to the word_hash:
            # key = current word in unique_words
            # value = number of times word occurs in word_list
            word_hash[word] = word_list.count(word)
            
    # Sort the word hash by values, high to low
    sorted_word_list = sorted(word_hash.items(), reverse=True, key=lambda item:item[1])

    # The sorted() returns a list of tuples with key-value pairs, and we want just the keys,
    # so our output is a list comprehension of just the keys, up to 3 elements:
    output = [ tuple[0] for tuple in sorted_word_list ][:3]

    return output

top_3_words("la lee lee lu lu lu ka ka")
top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")