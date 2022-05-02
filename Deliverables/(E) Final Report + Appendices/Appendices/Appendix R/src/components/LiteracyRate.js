import React from "react"
import { Card, Container } from "react-bootstrap"
import BreakdownBlurbs from "../assets/jsons/BreakdownBlurbs.json";
import LiteracyRateGraph from "./LiteracyRateGraph.tsx"

function LiteracyRate(props) {
    return(
        <div>
            <Container>
                <Card style={{backgroundColor: 'grey'}}>
                <Card.Body>
                    <Card.Title>{BreakdownBlurbs[props.ID].BlurbTitle}</Card.Title>
                    <Card.Text>
                    <p>
                        Following are the graphs that show the Sentiment for States. The data is displayed in line graphs with the furthest left being ranked highest in literacy rate, and the furthest right being states ranked lowest in literacy rate. This was done to allow any trends to easily visually detectable.
                    </p>
                    <p>
                        The first graph displays data as classified by the Sentiment Analysis Model, trained using 5000 data points, and classifying 400 data points per state.
                    </p>
                    <p>
                        The second graph displays data as classified by hand. However, this only consists of 100 data points per state. This data was only ever classified for the purposes of training the model. However, due to the model not performing to a high enough standard, I've included these results as well to be able to compare.
                    </p>
                    </Card.Text>
                </Card.Body>
                </Card>
                <br></br>
                    <div>
                        <Container style={{backgroundColor: 'rgb(148,148,148)'}}>
                            <LiteracyRateGraph ML={"Yes"} />
                        </Container>
                        <Card.Text>
                            <div style={{backgroundColor: 'grey'}}>
                                <p>
                                    No obvious trend can be extracted.
                                </p>
                            </div>
                        </Card.Text>
                        <Container style={{backgroundColor: 'rgb(148,148,148)'}}>
                            <LiteracyRateGraph ML={"No"} />
                        </Container>
                        <Card.Text>
                            <div style={{backgroundColor: 'grey'}}>
                                <p>
                                No obvious trend can be extracted.
                                </p>
                            </div>
                        </Card.Text>
                    </div>
                <br></br>
            </Container>
        </div>
    )
}

export default LiteracyRate