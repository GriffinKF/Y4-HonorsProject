import pickle

with open('TweetClassifierModel', 'rb') as training_model:
    tweetModel = pickle.load(training_model)