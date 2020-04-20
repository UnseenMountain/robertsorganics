import React from 'react';
import {useState } from "react"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal'


function NavBar (props) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Robert's Organics</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Blog</Nav.Link>
          <Nav.Link href="#features">Store</Nav.Link>
          <Nav.Link href="#pricing">Home</Nav.Link>
        </Nav>
        <Form inline>
         
        <Button variant="primary" onClick={handleShow}>
       Sign in
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleClose}>
    Submit
  </Button>
</Form></Modal.Body>
        
      </Modal>
        </Form>
      </Navbar>
    )
}

export default NavBar