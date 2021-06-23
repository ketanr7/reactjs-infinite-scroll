import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Navbar, Nav, Button, Modal, Form, FormControl, NavDropdown } from 'react-bootstrap';
import logo from '../logo-with-text.svg'
import logoBig from '../logo.jpg'
import Timer from './Timer'

import './Main.css'

const Header = (props) => {
  const [timer, setTimerOn] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  function EndClassModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select a reason to end class
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="radioContainer">
        <input type="radio" id="menu1" name="menu" defaultChecked />
          <label for="menu1" className="labelOne">
          <span className="checkmark1"></span>
          <span>Class completed</span></label>
          </div>
        <div className="collapsible-menu">
          <input type="radio" id="menu" name="menu"/>
          <label for="menu" className="labelTwo">
          <span className="checkmark"></span>
          <span>Class interrupted/aborted</span></label>
          <div className="menu-content">
          <ul>
            <label className="containerDiv" >
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
              <span>Student didn't show up for the class</span>
            </label>
            <label className="containerDiv" >
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
              <span>Student didn't show any interest</span>
            </label>
            <label className="containerDiv" >
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
              <span>Student got disconnected</span>
            </label>
            <label className="containerDiv" >
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
              <span>I got disconnected</span>
            </label>
            <input type="radio" id="menu2" name="radio"/>
              <label for="menu2" className="labelThree">
              <span className="checkmark lastCheckMark"></span>
              <span>Other reason</span></label>
             <div className="menu-content1">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </div>
          </ul>
        </div>
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {
          setTimerOn(false)
          setModalShow(false)
        }}>End Class</Button>
        <a onClick={props.onHide}>Cancel</a>
      </Modal.Footer>
    </Modal>
        );
    }
    return ( 
      <>
        <Navbar bg="white" expand="lg" fixed="top">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logoBig}
              width="30"
              height="30"
              className="d-none d-lg-block"
            />
            <img
              alt=""
              src={logo}
              width="120"
              height="50"
              className="d-lg-none"
            />      
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="mr-auto">
            <Nav.Link href="/passengers">Trial Lesson [Grade 1-3]</Nav.Link>
          </Nav>
                     <Nav.Link className="navLink"><Timer timer={timer}/></Nav.Link>
          <Button className="navBtn" onClick={() => setModalShow(true)}>End Class</Button>
       
      </Navbar.Collapse></Navbar> 
      <EndClassModal show = { modalShow } onHide = {
                () => setModalShow(false) }/>
      </>
    )
}

export default Header