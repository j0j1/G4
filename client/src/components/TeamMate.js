import styled from "styled-components"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';


const TeamMate = ({teamMember}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (


    <>
    <Card style={{ width: '15%', margin:"12px"}} bg={'dark'} onClick={handleShow}>
      <Card.Img variant="top" src={teamMember.url} />
      <Card.Body>
        <Card.Title style={{ fontSize:'15px', color:"white"}} >{teamMember.firstName} {teamMember.lastName}</Card.Title>
        <Card.Title style={{ fontSize:'13px', color:"white"}}>{teamMember.title}</Card.Title>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
    <Modal.Title>{teamMember.firstName} {teamMember.lastName}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{teamMember.bio}</Modal.Body>
    </Modal>
    </>
    )

}

const Wrapper = styled.div`

`
const Avatar = styled.img`
    height:100px;
`
const Written = styled.div``
export default TeamMate

