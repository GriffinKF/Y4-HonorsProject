import React from "react"
import { Card, Container } from "react-bootstrap"
import BreakdownBlurbs from "../assets/jsons/BreakdownBlurbs.json";

function ComparisonBlurb(props) {
    return(
        <div>
            <Container>
                <Card style={{backgroundColor: 'grey'}}>
                <Card.Body style={{backgroundColor: 'grey'}}>
                    <Card.Title>{BreakdownBlurbs[props.ID].BlurbTitle}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default ComparisonBlurb