import os
import sys

state = sys.argv[1]

count = 0
with open('../Data/FullArchiveCleaned/{}.txt'.format(state), 'r') as inputFile:
    while count < 100:
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

        manualClassification = input('Enter Classification (p or n): ')

        if manualClassification == 'p':
            with open('Positive/{}-{}.txt'.format(state, ID), 'w') as outputFile:
                outputFile.write(Tweet)
        elif manualClassification == 'n':
            with open('Negative/{}-{}.txt'.format(state, ID), 'w') as outputFile:
                outputFile.write(Tweet)
        else:
            manualClassification = input('Classification not recognized enter ONLY p or n: ')
            
        count = count + 1
