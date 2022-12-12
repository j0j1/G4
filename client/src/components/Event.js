import styled from "styled-components"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'


const Event = ({event}) => {
    const [show, setShow] = useState(false);
    const [showOff, setShowOff] = useState(false)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseOff = () => setShowOff(false);
    const handleShowOff = () => setShowOff(true);
    const handleRegister = () => {
      console.log('register')
      setShow(false);
      setShowOff(true);
    }

    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log(subject)

      fetch("/api/send_email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              firstName: firstName,
              lastName: lastName,
              email: email,
              message: message,
              subject: subject,
              event: event.eventTitle,
              eventDate: event.eventDate
          }),
      })
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
          if (data.status === 200) {
              window.alert("email success")
          } else {
              window.alert("Could not register at this time")
          }
      })
  };

    return (


    <>
    <Card style={{ width: '44rem'}} bg={'dark'} onClick={handleShow}>
      <Card.Img variant="top" src={event.imgUrl} />
      <Card.Body>
        <Card.Title style={{ fontSize:'17px', color:"white"}}> {event.eventTitle} </Card.Title>
        <Card.Title style={{ fontSize:'13px', color:"white"}}> {event.eventSubTitle} </Card.Title>
        <Card.Text style={{ fontSize:'13px', color:"white"}}>
            Date: {event.eventDate} <br/>
            Time: {event.eventTime} <br/>
            Location: {event.location}
        </Card.Text>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
    <Modal.Title>{event.eventTitle}</Modal.Title>
    <Modal.Title>{event.eventSubtitle}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
            Date: {event.eventDate} <br/>
            Time: {event.eventTime} <br/>
            Location: {event.location} <br/>
        {event. eventWriteUp}</Modal.Body>
        {event.registration && <Button onClick={handleRegister}> Register </Button>}
    </Modal>

    <Offcanvas show={showOff} onHide={handleCloseOff}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{event.eventTitle} Registration</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form onSubmit={handleSubmit}  style={{border:"2px red solid"}}>
                    <Row className='mb-3'>
                    <Col md>
                        <FloatingLabel
                                    controlId="floatingInput"
                                    label="First Name"
                                    className="mb-3">
                                    <Form.Control type="text" placeholder="Enter first name" onChange={(e)=> setFirstName(e.target.value) }/>
                        </FloatingLabel>
                    </Col>
                        <Col>
                        <FloatingLabel
                                    controlId="floatingInput"
                                    label="Last Name"
                                    className="mb-3">
                                    
                                    <Form.Control type="text" placeholder="Enter lastName" onChange={(e)=> setLastName(e.target.value) }/>
                                </FloatingLabel>
                        </Col>
                    </Row>
                <Row>
                    <Form.Group className='mb-3' controlId="FormGroupEmail">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3">
                            
                            <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value) }/>
                        </FloatingLabel>
                    </Form.Group>
                    
                </Row>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                as="textarea"
                placeholder="Comments concerns or questions"
                onChange={(e) => setMessage(e.target.value)}
                style={{ height: '100px' }}
                />
                </FloatingLabel>
                <Button type="submit">Submit</Button>
              </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
    )

}

const Wrapper = styled.div`

`
const Avatar = styled.img`
    height:100px;
`
const Written = styled.div``
export default Event