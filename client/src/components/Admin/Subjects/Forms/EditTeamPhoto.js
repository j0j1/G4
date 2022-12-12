import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const EditTeamPhoto = ( {teamToEdit, setTeamToEdit, setCurrentFunction, setCurrentSubject, setCurrentEdit}) => {
    const [loaded, setLoaded] = useState (false);
    const [image, setImage] = useState ();
    const [isSelected, setIsSelected] = useState(false);
    const [status, setStatus] = useState(false);
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
    


    const handleSubmit = async (e) => {
        e.preventDefault();
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


        const expressRes = await fetch(`/api/update_team/${teamToEdit.teamId}`, {
            method: "PATCH",
            body: JSON.stringify({
                url: cloudinaryData.secure_url,
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
        const data = await expressRes.json();
    
        if (data.status === 200) {
            window.alert("Team photo updated");
            setTeamToEdit("");
            setCurrentFunction("");
            setCurrentSubject("");
            setCurrentEdit("");
        } else {
            window.alert("Team photo could nto be updated at this time :(")
        }

    }

            
    return (<>
       
        <Form onSubmit={handleSubmit}>
        <Row>
            <PhotoSection>
                <CurrentPhoto src={teamToEdit.url}/>      
                <Form.Group controlId="formFile" className="mb-3" class="form-control-file border">
                <Form.Label>Replace Photo</Form.Label>
                <Form.Control type="file" onChange={(e) => setImage(  e.target.files[0])}/>
                </Form.Group>
                <PreviewImg src={preview}/>
            </PhotoSection>
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

export default EditTeamPhoto;