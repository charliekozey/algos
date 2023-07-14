def top_3_words(text):
    sanitized_text = text.translate({ord(char): " " for char in "!@#$%^&*()[]{};:,./<>?\|`~-=_+"})
    word_array = [word.lower() for word in sanitized_text.split()]
    unique_words = set(word_array)
    word_hash = {}
    output = []

    for word in unique_words:
        word_hash[word] = word_array.count(word)

    for i in range(len(unique_words)) if len(unique_words) <= 3 else range(3):
        max_count = max(word_hash.values())
        contenders = {i for i in word_hash if word_hash[i] == max_count}
        max_word = list(contenders)[0]
        output.append(max_word)
        word_hash.pop(max_word)
    
    return output


top_3_words("la lee lee lu lu lu")