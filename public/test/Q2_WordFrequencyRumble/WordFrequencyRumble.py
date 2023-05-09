import os
import string


def WordFrequencyRumble(filename):
    wordCount = {}

    with open(filename, 'r') as file:
        for line in file:
            line = line.strip().translate(str.maketrans('', '', string.punctuation))
            words = line.split()

            for word in words:
                if word in wordCount:
                    wordCount[word] += 1
                else:
                    wordCount[word] = 1

    topWords = sorted(wordCount.items(),
                      key=lambda x: x[1], reverse=True)[:3]
    return topWords


# Sample
filename = f"{os.path.dirname(os.path.abspath(__file__))}/Input.txt"
topWords = WordFrequencyRumble(filename)

# Print the result
print(topWords)

# Output
'''
[('the', 2), ('are', 2), ('known', 2)]
'''