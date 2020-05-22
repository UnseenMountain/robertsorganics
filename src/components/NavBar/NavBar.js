import React from 'react';
import { useState } from "react"
import { Navbar, Nav, Form, Button } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal'
import { Link } from "react-router-dom"
import "./style.css"

function NavBar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  >
      <Navbar.Brand href="/">Robert's Organics</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="mr-auto">
        </Nav>




        <Form inline>
          <div className="links">
            <a className="space" href="/"> Home </a>
            <a className="space" href="/Store"> Store </a>
            <a className="space"  href="/Blog">  Blog  </a>
            <a className="space" href="/Recipes"> Recipes </a>



        <a className="space" href="/cart">My cart</a>
          </div>

          <Button variant="primary" onClick={handleShow}>
            Sign in
       </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Sign in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
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
              </Form>
            </Modal.Body>

          </Modal>
        </Form>

      </Navbar.Collapse>

    </Navbar>

  )
}

export default NavBar