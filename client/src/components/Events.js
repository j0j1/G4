import TipiBaseTile from "./Geometrics/TipiBaseTile";
import Event from "./Event"
import TeamMate from "./TeamMate";
import { useState, useEffect } from "react"
import styled from "styled-components";


const Events = ({mistymountain}) => {
    const [events, setEvents] = useState([]);
    const [loaded, setloaded] = useState(false);

    useEffect(() => {
        fetch('/api/get_events')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setEvents(data.data)
                setloaded(true)
                console.log(events, "iiiii")})
        },[]);
    

    return (<>
        <Backdrop style={{backgroundImage: `url(${mistymountain})`}}>
        <h1 style={{color:"white"}}>EVENTS</h1>
        { !loaded
        ? <h1>loading</h1>
        : [ <Wrapper>
            {events.map((event) => {
            return <Event event={event}/>
            })}
            </Wrapper>
        ]}
        </Backdrop>
    </>)
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 3%;
    width:fit-content;
    margin-left: auto;
    margin-right: auto;

`

const Backdrop = styled.div`

background-size: cover;
min-height: 100vh;
`

export default Events;
