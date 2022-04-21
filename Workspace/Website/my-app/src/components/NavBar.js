import React from "react"
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom"

function NavBar() {
  return (  
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link style={{textDecoration: "none"}} to={"/"}>
          <Navbar.Brand>Data Mining Human Reasoning: Vaccine Hesitancy in the USA</Navbar.Brand>
        </Link>
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