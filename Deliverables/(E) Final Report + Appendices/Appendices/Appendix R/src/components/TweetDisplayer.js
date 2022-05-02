import React from "react"
import ExampleTweets from "../assets/jsons/ExampleTweets.json"
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { Container } from "react-bootstrap";
import { Card, CardGroup } from "react-bootstrap";



function TweetDisplayer(props) {
    var negative = ExampleTweets.contents[props.stateID].contents[0].contents
    var neutral = ExampleTweets.contents[props.stateID].contents[1].contents
    var positive = ExampleTweets.contents[props.stateID].contents[2].contents

    var negativeIDs = []
    var neutralIDs = []
    var positiveIDs = []

    for (let i = 0; i < Object.keys(negative).length; i++) {
        negativeIDs.push(negative[i].name.slice(-23, -4))
    }

    for (let i = 0; i < Object.keys(neutral).length; i++) {
        neutralIDs.push(neutral[i].name.slice(-23, -4))
    }

    for (let i = 0; i < Object.keys(positive).length; i++) {
        positiveIDs.push(positive[i].name.slice(-23, -4))
    }

    var randomNeg = Math.floor(Math.random() * negativeIDs.length)
    var randomNeut = Math.floor(Math.random() * neutralIDs.length)
    var randomPos = Math.floor(Math.random() * positiveIDs.length)


    return(
        <Container>
            <Card style={{backgroundColor:'grey'}}>
                <Card.Body>
                    <Card.Title style={{textAlign:'center'}}>
                        <p>
                            Examples of Tweets
                        </p>
                    </Card.Title>
                </Card.Body>
                <CardGroup>
                    <Card style={{backgroundColor: 'rgb(148,148,148)'}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>
                                <p>
                                    Negative
                                </p>
                            </Card.Title>
                            <TwitterTweetEmbed tweetId={negativeIDs[randomNeg]} />
                        </Card.Body>
                    </Card>
                    <Card style={{backgroundColor: 'rgb(148,148,148)'}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>
                                <p>
                                    Neutral
                                </p>
                            </Card.Title>
                            <TwitterTweetEmbed tweetId={neutralIDs[randomNeut]} />
                        </Card.Body>
                    </Card>
                    <Card style={{backgroundColor: 'rgb(148,148,148)'}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>
                                <p>
                                    Positive
                                </p>
                            </Card.Title>
                            <TwitterTweetEmbed tweetId={positiveIDs[randomPos]} />
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Card>
        </Container>
    )
}

export default TweetDisplayer