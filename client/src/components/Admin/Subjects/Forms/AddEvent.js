import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'
import Button from 'react-bootstrap/Button'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useState, useEffect } from "react";
import uuid from 'react-uuid';


const AddEvent = ({setCurrentFunction, setCurrentSubject}) => {
    const [eventTitle, setEventTitle] = useState ("");
    const [eventSubTitle, setEventSubTitle] = useState ("");
    const [location, setLocation] = useState ("");
    const [eventDate, setEventDate] = useState ();
    const [eventTime, setEventTime] = useState ();
    const [eventWriteUp, setEventWriteUp] = useState ();
    const [registration, setRegistration] = useState (false);
    const [registrationEmail, setRegistrationEmail] = useState("")
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();

    
    useEffect(() => {
        if (!image) {
            setPreview(undefined)
            return
            }
    
        const objectUrl = URL.createObjectURL(image)
        setPreview(objectUrl)
    
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [image]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(eventTitle, eventSubTitle, eventTime, );

        const fileData = new FormData();
        fileData.append("file", image);
        fileData.append("upload_preset", "G4SNTTC");
        const cloudinaryRes = await fetch(
            "https://api.cloudinary.com/v1_1/dwczrztj8/image/upload",
            {
                method: "POST",
                body: fileData,
            })
        const cloudinaryData = await cloudinaryRes.json();

        const expressRes = await fetch("/api/add_event", {
            method: "POST",
            body: JSON.stringify({
                imgUrl: cloudinaryData.secure_url,
                eventTitle: eventTitle,
                eventSubTitle: eventSubTitle,
                eventDate: eventDate,
                eventTime: eventTime,
                location: location,
                eventWriteUp: eventWriteUp,
                registration: registration,
                registrationEmail: registrationEmail,
                eventId: uuid()
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        const data = await expressRes.json();
        if (data.status === 201) {
            window.alert("New event created");
            setCurrentFunction("");
            setCurrentSubject("");
        } else {
            window.alert("Event could not be created at this time :(")
        }
        
        };

    return(<>
    
        <Form onSubmit={handleSubmit}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Event Title"
                        className="mb-3">
                        <Form.Control type="text" placeholder="Enter event title" onChange={(e)=> setEventTitle(e.target.value) }/>
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Event SubTitle"
                        className="mb-3">
                        <Form.Control type="text" placeholder="Enter event subtitle" onChange={(e)=> setEventSubTitle(e.target.value) }/>
                    </FloatingLabel>

            <Row>
                <FloatingLabel
                        controlId="floatingInput"
                        label="Location"
                        className="mb-3">
                        <Form.Control type="text" placeholder="Enter title" onChange={(e)=> setLocation(e.target.value) }/>
                 </FloatingLabel>
            </Row>

            <Row>
                <FloatingLabel
                        controlId="floatingInput"
                        label="Date"
                        className="mb-3">
                        <Form.Control type="text" placeholder="Enter title" onChange={(e)=> setEventDate(e.target.value) }/>
                 </FloatingLabel>
            </Row>

            <Row>
                <FloatingLabel
                        controlId="floatingInput"
                        label="Time"
                        className="mb-3">
                        <Form.Control type="text" placeholder="Enter Event Time" onChange={(e)=> setEventTime(e.target.value) }/>
                 </FloatingLabel>
            </Row>

            <Row>
                <FloatingLabel controlId="floatingTextarea2" label="Description">
                <Form.Control
                as="textarea"
                placeholder="Event Write-up"
                onChange={(e) => setEventWriteUp(e.target.value)}
                style={{ height: '100px' }}
                />
                </FloatingLabel>
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type = "checkbox"
                        label = "requires registration"
                        onChange={(e)=> setRegistration(!registration)}/>
                </Form.Group>

            </Row>
            {registration && 
                <FloatingLabel
                    controlId="floatingInput"
                    label="Registration Email address"
                    className="mb-3">                       
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setRegistrationEmail(e.target.value) }/>
                </FloatingLabel>
            }
            <Row>
 
     
                    <Form.Group controlId="formFile" className="mb-3" class="form-control-file border">
                    <Form.Label>Replace Photo</Form.Label>
                    <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])}/>
                    </Form.Group>
                    <img src={preview} style={{width:"300px"}}/>

            </Row>
            <Button type="submit">Submit</Button>
        </Form>
    
    </>)

}


export default AddEvent;