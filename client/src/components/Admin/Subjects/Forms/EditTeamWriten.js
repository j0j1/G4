import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const EditTeamWritten = ( {teamToEdit, setCurrentFunction, setCurrentSubject} ) => {
    const [form, setForm] = useState ({});
    const departments = ["Justice", "Health", "Reaching Home", "Education", "Child and Family Services", "Executive", "Other"];


    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (window.confirm(`are you sure you want to update ${teamToEdit.firstName + " " + teamToEdit.lastName}  in the database?`)) {
            
            const expressRes = await fetch(`/api/update_team/${teamToEdit.teamId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    form
                }),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                })
        }
    }
    


    return (<>
        <Form onSubmit={handleSubmit}>
        <Row className='mb-3'>
            <Col md>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder={teamToEdit.firstName} onChange={(e)=> setField('firstName', e.target.value) } />
        
            </Col>
            <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder={teamToEdit.lastName} onChange={(e)=> setField('lastName', e.target.value )} />
                
            </Col>
        </Row>
        <Row>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder={teamToEdit.title} onChange={(e)=> setField( 'title', e.target.value )} />
        </Row>
            <Form.Select
                label="Subject/Department"
                onChange={(e)=> setField( 'department', e.target.value )}>
                <option value=''>{teamToEdit.department}</option>
                {departments.map((i) => {
                    return <option value= {i} > {i} </option>
                })}  
            </Form.Select>
        <Row>
            <Form.Label>Bio</Form.Label>
            <Form.Control
                as="textarea"
                placeholder={teamToEdit.bio}
                onChange={(e) => setField('bio', e.target.value)}
                style={{ height: '100px' }}
            />
        </Row>
        
        <Button type="submit">Submit</Button>
        </Form>
    </>)
}

const PhotoSection = styled.div`
    display:flex;
`

const PreviewImg = styled.img`
    height:300px;
`
const CurrentPhoto = styled.img`
    height:300px;
`

export default EditTeamWritten;