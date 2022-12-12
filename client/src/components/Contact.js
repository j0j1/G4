import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'
import Button from 'react-bootstrap/Button'
import { useState } from "react";
import TriangleMotifVertical from './Geometrics/TriangleMotifVertical'
import Arrow from './Geometrics/Arrow'
import styled from 'styled-components'
import FullPage from './Geometrics/FullPage'

const Contact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("");

    const styles = { 
        transform: `translate(20px, 40px)` 
    };


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
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            if (data.status === 200) {
                window.alert("email success")
            } else {
                window.alert("Something went wrong")
            }
        })
    };

    return (<>

        <FullPage>
            <div >
                <Title>
                    <Arrow height={65}/>
                    <h1>CONTACT</h1>
                    <Arrow  transform={"scale(-1,-1)"} height={65}/>
                </Title>
                <Form onSubmit={handleSubmit}>
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
                
                <FloatingLabel
                            controlId="floatingInput"
                            label="Subject/Department"
                            className="mb-3">
                    <Form.Select aria-label="Subject/Department"
                    onChange={(e)=> setSubject(e.target.value) }>
                    <option value="0">General Inquiries</option>
                    <option value="1">Press/Media</option>
                    <option value="2">Justice</option>
                    <option value="3">Health</option>
                    <option value="4">Reaching Home</option>
                    <option value="5">Education</option>
                    <option value="6">Child and Family Services</option>
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Message">
                <Form.Control
                as="textarea"
                placeholder="Write your message here"
                onChange={(e) => setMessage(e.target.value)}
                style={{ height: '100px' }}
                />
                </FloatingLabel>
                <Button type="submit" style={{marginTop:"1%"}}>Submit</Button>
                </Form>
            </div>
        </FullPage>
    </>)
}

const Title = styled.div`
    display:flex;
    justify-content: center;
    height:12%;
`

export default Contact;