import os
import sys


count = 1
with open('../Data/FullArchiveCleaned/{}.txt'.format(sys.argv[1]), 'r') as inputFile:

    def fileWriter(tweetState, tweetID, tweetText):
        with open('{}/{}-{}.txt'.format(tweetState, tweetState, tweetID), 'w') as outputFile:
                outputFile.write(tweetText)

    # Skip first hundred tweets, as they were used for training
    while count < 101:
        inputFile.readline()
        inputFile.readline()
        inputFile.readline()
        count = count + 1

    while count > 100 and count < 501: 
        #Reads the first line
        line = inputFile.readline()
        #Grabs only the ID
        ID = line[4:23]
        #print(ID, count)
        #Reads the second line
        line = inputFile.readline()
        #Grabs only the tweet (drops the "Text: " from the start)
        Tweet = line[6:len(line)]
        #print(Tweet)
        #Reads an empty line to get ready for the next set of tweets, each tweet occupies 3 lines. ID/Tweet/Blank Line
        inputFile.readline()

        fileWriter(sys.argv[1], ID, Tweet)
            
        count = count + 1