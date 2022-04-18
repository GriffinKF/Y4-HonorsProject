import React from "react"
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

function NavBar() {
  return (  
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Data Mining Human Reasoning: Vaccine Hesitancy in the USA</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Presented By: Griffin Kashaf
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar