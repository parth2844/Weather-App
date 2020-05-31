import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

function NavBar() {
    return (
        <Navbar expand="lg" bg="light">
            <Navbar.Brand href="/">Weather App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Form inline className="ml-auto">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button type="submit">Search</Button>
            </Form>
            </Navbar.Collapse>
            
        </Navbar>
    )
}

export default NavBar
