from distutils.log import error
import numpy as np
import re
import nltk
from sklearn.datasets import load_files
from sklearn.ensemble import RandomForestClassifier
#nltk.download('stopwords')
#nltk.download('wordnet')
#nltk.download('omw-1.4')
import pickle
from nltk.corpus import stopwords
import math
import os


tweet_data = load_files(r"Data", encoding='utf-8', shuffle=False)
#X holds the actual data from the files, y holds the supervised signal label names (pos and neg)
X, targetName = tweet_data.data, tweet_data.target_names

fileNameData = load_files(r"Data", load_content='false', shuffle=False)
#X holds the actual data from the files, y holds the supervised signal label names (pos and neg)
X_fileNames = tweet_data.filenames

unproccessedData = X

documents = []

from nltk.stem import WordNetLemmatizer

stemmer = WordNetLemmatizer()

for sen in range(0, len(X)):

    document = str(X[sen])

    # Remove all the special characters
    document = re.sub(r'\W', ' ', document)
    
    # remove all single characters
    document = re.sub(r'\s+[a-zA-Z]\s+', ' ', document)
    
    # Remove single characters from the start
    document = re.sub(r'\^[a-zA-Z]\s+', ' ', document) 
    
    # Substituting multiple spaces with single space
    document = re.sub(r'\s+', ' ', document, flags=re.I)
    
    # Removing prefixed 'b'
    document = re.sub(r'^b\s+', '', document)
    
    # Converting to Lowercase
    document = document.lower()
    
    # Lemmatization
    document = document.split()

    document = [stemmer.lemmatize(word) for word in document]
    document = ' '.join(document)
    
    documents.append(document)

from sklearn.feature_extraction.text import TfidfVectorizer
tfidfconverter = TfidfVectorizer(max_features=1500, min_df=5, max_df=0.7, stop_words=stopwords.words('english'))
X = tfidfconverter.fit_transform(documents).toarray()

with open('TweetClassifierModel2.pickle', 'rb') as training_model:
    model = pickle.load(training_model)

y_pred = model.predict(X)

# with np.printoptions(threshold=np.inf):
#      print(y_pred)

for x in range(0, len(unproccessedData)):
    tweet = unproccessedData[x]
    stateName = targetName[math.trunc(x/400)]
    ID = X_fileNames[x][-23:-4]
    
    if y_pred[x] == 0:
        prediction = "Negative"
    elif y_pred[x] == 1:
        prediction = "Neutral"
    elif y_pred[x] == 2:
        prediction = "Positive"

    try:
        os.makedirs(os.path.join(os.getcwd(), 'ClassifiedData/{}/{}'.format(stateName, prediction)), exist_ok = True)
    except OSError as error:
        pass

    with open('ClassifiedData/{}/{}/{}-{}.txt'.format(stateName, prediction, stateName, ID), 'w') as outputFile:
        outputFile.write(tweet)

