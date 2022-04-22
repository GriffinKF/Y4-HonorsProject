import React from "react"
import { Container } from "react-bootstrap"
import { Card } from "react-bootstrap"
import StateData from "../assets/jsons/StateSentiment.json";

function States() {
    const ID = parseInt(window.location.href.slice(window.location.href.length - 3)) - parseInt(100)
    StateData.sort((a, b) => a.State.localeCompare(b.State))
    const data = StateData.map((data) => data)
    const state = data[ID]
    return(
        <div>
            <Container>
                <Card style={{backgroundColor: 'grey'}}>
                <Card.Body>
                    <Card.Title>Induvidual State Data: {state.State}</Card.Title>
                    <Card.Text>
                        <p>
                        Placeholder
                        </p>
                        <p>
                        Placeholder
                        </p>
                        <p>
                        Placeholder
                        </p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default States