import React from "react"
import { Card, Container } from "react-bootstrap"
import BreakdownBlurbs from "../assets/jsons/BreakdownBlurbs.json";
import PoliticalLeaningGraph from "./PoliticalLeaningGraph.tsx"

function PoliticalLeaning(props) {
    return(
        <div>
            <Container>
                <Card style={{backgroundColor: 'grey'}}>
                <Card.Body>
                    <Card.Title>{BreakdownBlurbs[props.ID].BlurbTitle}</Card.Title>
                    <Card.Text>
                        <p>
                        Following are the graphs that show the % Positive Sentiment for Rebulican States and Democratic States respectfully. Not all 50 states are represented here, as "swing" states that do not have a consistent political affiliation were left out.
                        </p>
                        <p>
                        The first two graphs display data as classified by the Sentiment Analysis Model, trained using 5000 data points, and classifying 400 data points per state.
                        </p>
                        <p>
                        The second two graphs display data as classified by hand. However, this only consists of 100 data points per state. This data was only ever classified for the purposes of training the model. However, due to the model not performing to a high enough standard, I've included these results as well to be able to compare.
                        </p>
                    </Card.Text>
                </Card.Body>
                </Card>
                <br></br>
                <div>
                    <Container style={{backgroundColor: 'rgb(148,148,148)'}}>
                        <PoliticalLeaningGraph party={"R"}/>
                    </Container>
                    <Card.Text>
                        <div style={{backgroundColor: 'grey'}}>
                            <p>
                                Average Positive Sentiment % for Rebulican States: 7.2%
                            </p>
                            <p>
                                Average Negative Sentiment % for Rebulican States: 39.3%
                            </p>
                        </div>
                    </Card.Text>
                    <Container style={{backgroundColor: 'rgb(148,148,148)'}}>
                        <PoliticalLeaningGraph party={"D"}/>
                    </Container>
                    <Card.Text>
                        <div style={{backgroundColor: 'grey'}}>
                            <p>
                                Average Positive Sentiment % for Democract States: 7.8%
                            </p>
                            <p>
                                Average Negative Sentiment % for Democract States: 40.1%
                            </p>
                        </div>
                    </Card.Text>
                    <Container style={{backgroundColor: 'rgb(148,148,148)'}}>
                        <PoliticalLeaningGraph party={"tR"}/>
                    </Container>
                    <Card.Text>
                        <div style={{backgroundColor: 'grey'}}>
                            <p>
                                Average Positive Sentiment % for Rebulican States: 41.0%
                            </p>
                            <p>
                                Average Negative Sentiment % for Rebulican States: 12.3%
                            </p>
                        </div>
                    </Card.Text>
                    <Container style={{backgroundColor: 'rgb(148,148,148)'}}>
                        <PoliticalLeaningGraph party={"tD"}/>
                    </Container>
                    <Card.Text>
                        <div style={{backgroundColor: 'grey'}}>
                            <p>
                                Average Positive Sentiment % for Democractic States: 37.5%
                            </p>
                            <p>
                                Average Negative Sentiment % for Democratic States: 16.2%
                            </p>
                        </div>
                    </Card.Text>
                </div>
                <br></br>
            </Container>
        </div>
    )
}

export default PoliticalLeaning