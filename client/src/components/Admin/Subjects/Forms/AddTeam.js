import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import uuid from 'react-uuid';


const AddTeam = ({setCurrentFunction, setCurrentSubject}) => {
    const navigate = useNavigate();
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [validated, setValidated] = useState(false);
    const departments = ["Justice", "Health", "Reaching Home", "Education", "Child and Family Services", "Executive", "Other"];

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })

        if ( !!errors[field] ) setErrors({
            ...errors,
            [field]: null
          })

    }

    //checks form fields and sets error message for empty fields
    const findFormErrors = () => {
        const {name, lastName, title, department, bio, selectedFile} = form;
        const newErrors = {};
            if( !name || name === '') newErrors.name = 'please enter name';
            if( !lastName || lastName === '') newErrors.lastName = 'please enter last name';
            if( !title || title === '') newErrors.title = 'please enter title';
            if( !department || department === '') newErrors.department = 'please select department';
            if( !bio || bio === '') newErrors.bio = 'please enter a bio';
            if( !selectedFile || selectedFile  === '') newErrors.selectedFile= 'please select an image to upload'
        return newErrors
    }

    //triggered on submit
    //checks for errors calls handleSubmit if no errors
    const validateForm = (e) => {
        e.preventDefault();
        const newErrors = findFormErrors()

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            handleSubmit(e)
        }
    }

    // submit the data for new team member to server
    const handleSubmit = async (e) => {
        e.preventDefault();
        const fileData = new FormData();
        fileData.append("file", form.selectedFile);
        fileData.append("upload_preset", "G4SNTTC");
        const cloudinaryRes = await fetch(
            "https://api.cloudinary.com/v1_1/dwczrztj8/image/upload",
            {
                method: "POST",
                body: fileData,
            })
        const cloudinaryData = await cloudinaryRes.json();

        const expressRes = await fetch("/api/add_team", {
            method: "POST",
            body: JSON.stringify({
                url: cloudinaryData.secure_url,
                firstName: form.name,
                lastName: form.lastName,
                title: form.title,
                department: form.department,
                bio: form.bio,
                teamId: uuid()
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        const data = await expressRes.json();
        if (data.status === 201) {
            window.alert("New team-member created");
            setForm({});
            setCurrentFunction("");
            setCurrentSubject("");
        } else {
            window.alert("Could not create new member at this time :(")
        }
        
    };
        
    
    useEffect(() => {
        if (!form.selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(form.selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [form.selectedFile]);


    return(<>
    
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className='mb-3'>
                <Col md>
                    <FloatingLabel
                        required
                        controlId="floatingInput"
                        label="First Name"
                        className="mb-3"
                        >
                        <Form.Control type="text" placeholder="Enter first name" onChange={(e)=> setField('name', e.target.value) } isInvalid={ !!errors.name }/>
                        <Form.Control.Feedback type='invalid'> { errors.name } </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        required
                        controlId="floatingInput"
                        label="LastName"
                        className="mb-3"
                        required>
                        <Form.Control type="text" placeholder="Enter last name" onChange={(e)=> setField('lastName', e.target.value )} isInvalid={ !!errors.lastName } />
                        <Form.Control.Feedback type='invalid'> { errors.lastName } </Form.Control.Feedback>
                    </FloatingLabel>
                    
                </Col>
            </Row>
            <Row>
                <FloatingLabel
                        required
                        controlId="floatingInput"
                        label="Title"
                        className="mb-3">
                        <Form.Control type="text" placeholder="Enter title" onChange={(e)=> setField( 'title', e.target.value )} isInvalid={ !!errors.title } />
                        <Form.Control.Feedback type='invalid'> { errors.title } </Form.Control.Feedback>
                    </FloatingLabel>
                 
            </Row>
                <FloatingLabel
                            required
                            controlId="floatingInput"
                            label="Subject/Department"
                            className="mb-3">
                    <Form.Select
                        required
                        aria-label="Subject/Department"
                        onChange={(e)=> setField( 'department', e.target.value )}
                        isInvalid={ !!errors.department }>
                        <option value=''>Select department:</option>
                        {departments.map((i) => {
                            return <option value= {i} > {i} </option>
                        })}
                        
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'> { errors.department } </Form.Control.Feedback>
                </FloatingLabel>
            <Row>
                <FloatingLabel controlId="floatingTextarea2" label="Bio">
                <Form.Control
                    as="textarea"
                    placeholder="Write bio here"
                    onChange={(e) => setField('bio', e.target.value)}
                    style={{ height: '100px' }}
                    isInvalid={ !!errors.bio }
                />
                <Form.Control.Feedback type='invalid'> { errors.bio } </Form.Control.Feedback>
                </FloatingLabel>
            </Row>
            <Row>
                <Form.Group controlId="formFile" className="mb-3" class="form-control-file border">
                    <Form.Label>Upload Photo</Form.Label>
                    <Form.Control type="file" onChange={(e) => setField('selectedFile',  e.target.files[0])} isInvalid={ !!errors.selectedFile }/>
                    <Form.Control.Feedback type='invalid'> { errors.selectedFile } </Form.Control.Feedback>
                </Form.Group>
                <PreviewImg src={preview}/>
            </Row>
            
            <Button type="submit">Submit</Button>
            

        </Form>
    
    </>)

}

export default AddTeam

const PreviewImg = styled.img`
    height:300px;
`