import React from "react"
import { Card, Container } from "react-bootstrap"
import BreakdownBlurbs from "../assets/jsons/BreakdownBlurbs.json";
import PoliticalLeaningGraph from "./PoliticalLeaningGraph.tsx"

function ComparisonBlurb(props) {
    return(
        <div>
            <Container>
                <Card style={{backgroundColor: 'grey'}}>
                <Card.Body style={{backgroundColor: 'grey'}}>
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
                        <p>
                        I have included a few words beneath each Graph, as my own interpretations of the data
                        </p>
                    </Card.Text>
                </Card.Body>
                </Card>
                <div>
                    <PoliticalLeaningGraph party={"R"} />
                    <Card.Text>
                        <p style={{backgroundColor: 'grey'}}>
                            Test
                        </p>
                    </Card.Text>
                    <PoliticalLeaningGraph party={"D"}/>
                    <Card.Text>
                        <p style={{backgroundColor: 'grey'}}>
                            Test
                        </p>
                    </Card.Text>
                    <PoliticalLeaningGraph party={"tR"}/>
                    <Card.Text>
                        <p style={{backgroundColor: 'grey'}}>
                            Test
                        </p>
                    </Card.Text>
                    <PoliticalLeaningGraph party={"tD"}/>
                    <Card.Text>
                        <p style={{backgroundColor: 'grey'}}>
                            Test
                        </p>
                    </Card.Text>
                </div>
            </Container>
        </div>
    )
}

export default ComparisonBlurb