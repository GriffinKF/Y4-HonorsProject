import React from "react"
import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"

function Footer() {
    return(
        <div>
            <Navbar bg="dark" variant="dark" fixed="bottom">
                <Container>
                    <Navbar.Brand>AC40001 - Honors Project</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Website Built Using: React.js
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      </div>
    )
}

export default Footer