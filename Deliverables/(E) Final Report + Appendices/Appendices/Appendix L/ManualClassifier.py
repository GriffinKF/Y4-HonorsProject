import os
import sys


count = 1
with open('../Data/FullArchiveCleaned/{}.txt'.format(sys.argv[1]), 'r') as inputFile:

    def manualClassfier(inputClassification, tweetState, tweetID, tweetText):
        if inputClassification == 'p':
            with open('Positive/{}-{}.txt'.format(tweetState, tweetID), 'w') as outputFile:
                outputFile.write(tweetText)
        elif inputClassification == 'n':
            with open('Negative/{}-{}.txt'.format(tweetState, tweetID), 'w') as outputFile:
                outputFile.write(tweetText)
        elif inputClassification == 'm':
            with open('Neutral/{}-{}.txt'.format(tweetState, tweetID), 'w') as outputFile:
                outputFile.write(tweetText)
        else:
            inputClassification = input('Invalid Classification, try again (p/n/m): ')
            manualClassfier(inputClassification, tweetState, tweetID, tweetText)

    while count < 101:
        #Reads the first line
        line = inputFile.readline()
        #Grabs only the ID
        ID = line[4:23]
        print(ID, count)
        #Reads the second line
        line = inputFile.readline()
        #Grabs only the tweet (drops the "Text: " from the start)
        Tweet = line[6:len(line)]
        print(Tweet)
        #Reads an empty line to get ready for the next set of tweets, each tweet occupies 3 lines. ID/Tweet/Blank Line
        inputFile.readline()

        manualClassification = input('Enter Classification (p/n/m): ')

        manualClassfier(manualClassification, sys.argv[1], ID, Tweet)
            
        count = count + 1