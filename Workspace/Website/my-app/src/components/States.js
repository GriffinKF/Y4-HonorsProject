import React from "react"
import { Container } from "react-bootstrap"
import { Card, CardGroup } from "react-bootstrap"
import StateData from "../assets/jsons/StateSentiment.json";
import StatePieChart from "./StatePieChart.tsx"

function States() {
    const ID = parseInt(window.location.href.slice(window.location.href.length - 3)) - parseInt(100)
    StateData.sort((a, b) => a.State.localeCompare(b.State))
    const data = StateData.map((data) => data)
    const state = data[ID]
    return(
        <body style={{backgroundColor: 'darkgrey', marginBottom: 56}}>
            <Container>
                <Card style={{backgroundColor: 'grey'}}>
                    <Card.Body >
                        <Card.Title>Induvidual State Data: {state.State}</Card.Title>
                        <Card.Text>
                            <p>
                            The following page displays individual data for the State of {state.State} 
                            </p>
                            <p>
                            {state.State} is considered a {state.Political == "R" ? 'right wing (Republican) state' : state.Political == "D" ? 'left wing (Democrat) state' : 'Swing state (no consistent left or right wing allegiance)'} and has the following rankings in various statistics used for previous comparisons with other states in an attempt to find trends in vaccine sentiment.
                            </p>
                            <ul>
                                <li>Public Health Spending Per Capita (Lower Rank = Higher Spending): {state.PublicHealthRank}</li>
                                <li>Literacy Rate (Lower Rank = Higher Literacy Rate): {state.LiteracyRank}</li>
                                <li>Unemployment Rate (Lower Rank = Higher Unemployment): {state.UnemploymentRank}</li>
                                <li>Average Age (Lower Rank = Higher Average Age): {state.AverageAgeRank}</li>
                                <li>Average Househould Income (Lower Rank = Higher Income): {state.AverageHouseholdIncomeRank}</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br></br>
                <Card style={{backgroundColor: 'grey'}}>
                    <Card.Body>
                        <Card.Title style={{textAlign: "center"}}>
                            Raw Sentiment Data
                        </Card.Title>
                        <Card.Text style={{textAlign: "center"}}>
                            Data as classified by the Machine Learning Model on the left (first), and as classified by hand for Training Purposes on the right (second).
                        </Card.Text>
                    </Card.Body>
                    <CardGroup>
                        <Card style={{backgroundColor: 'rgb(148,148,148)'}}>
                            <Card.Body>
                                <StatePieChart stateData={state} ML={"Yes"}/>
                            </Card.Body>
                        </Card>
                        <Card style={{backgroundColor: 'rgb(148,148,148)'}}>
                            <Card.Body>
                                <StatePieChart stateData={state} ML ={"No"}/>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Card>
            </Container>
            <br></br>
        </body>
    )
}

export default States