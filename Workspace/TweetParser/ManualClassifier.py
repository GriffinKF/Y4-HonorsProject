import os

state = "Alabama"

with open('../Data/FullArchiveCleaned/{}.txt'.format(state), 'r') as inputFile:
    #Reads the first line
    line = inputFile.readline()
    #Grabs only the ID
    ID = line[4:23]
    print(ID)
    #Reads the second line
    line = inputFile.readline()
    #Grabs only the tweet (drops the "Text: " from the start)
    Tweet = line[6:len(line)]
    print(Tweet)
    #Reads an empty line to get ready for the next set of tweets, each tweet occupies 3 lines. ID/Tweet/Blank Line
    inputFile.readline()

    with open('Positive/{}-{}.txt'.format(state, ID), 'w') as outputFile:
        outputFile.write(Tweet)

    with open('Negative/{}-{}.txt'.format(state, ID), 'w') as outputFile:
        outputFile.write(Tweet)
