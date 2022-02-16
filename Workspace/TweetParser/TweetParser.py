import json

#Open the JSON File containing the tweet data
tweetData = open('../Data/FullArchiveRaw/Alabama.json')

dataDictionary = json.load(tweetData)

for i in dataDictionary['results']:
    print("ID: " + i["id_str"])

    try:
        print("Text: " + i["extended_tweet"]["full_text"])
    except KeyError:
        print("Text: " + i["text"])

    print("")

tweetData.close()