import React from "react"
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"


function GridCard(props) {
    return(
        <Card>
            <Card.Img variant="top" src={props.breakdownImage} />
            <Card.Body>
                <Card.Title>{props.breakdownTitle}</Card.Title>
                <Card.Text>{props.breakdownDesc}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link to={props.path}>
                <Button variant="primary">See More Details</Button>
                </Link>
            </Card.Footer>
        </Card>    
    )
}

export default GridCard