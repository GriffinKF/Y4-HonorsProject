import React from "react"
import { Card, Container } from "react-bootstrap"
import USAImage from "../assets/images/USA.webp"
// import USAImageSmall from "../assets/images/USASmall.png"

function Blurb() {
    return(
        <div>
            <Container>
                <Card style={{backgroundColor: 'grey'}}>
                <Card.Body style={{backgroundColor: 'grey'}}>
                    <Card.Title>Introduction</Card.Title>
                    <Card.Text>
                        <p>
                            For my Honors Project, I decided to take a data-driven approach to study vaccine hesitancy in the United States. While that sounds cool, what does it actually mean?
                        </p>
                        <p>
                            Well, the first thing you need for a data-driven approach is the data itself. I decided the data I wanted to use was from Twitter, Tweets about vaccines in particular. I used the twitter API to collect tweets from each state, and then applied Natural Language Processing and Machine Learning techniques to be able to very quickly automatically classify the sentiment of the tweets. Creating a scalable platform that would become more accurate as the amount of data increased. 
                        </p>
                        <p>
                            Scroll down to explore the results and various comparions!
                        </p>
                    </Card.Text>
                </Card.Body>
                {/* This image was sourced from World Atlas */}
                <Card.Img variant="top" src={USAImage}/>
                </Card>
            </Container>
        </div>
    )
}

export default Blurb