// import Chiefs from "./People/Chiefs"
// import Bureau from "./People/Bureau"
// import Council from "./People/Council"
import TeamMate from "./TeamMate";
import { useState, useEffect } from "react"
import styled from "styled-components";
import TriangleMotifVertical from "./Geometrics/TriangleMotifVertical";


const Team = ({mistymountain}) => {
    const [team, setTeam] = useState([]);
    const [loaded, setloaded] = useState(false);

    useEffect(() => {
        fetch('https://g4serever-production.up.railway.app/api/getg4team')
            .then((res) => res.json())
            .then((data) => {
                setTeam(data.data)
                setloaded(true)
            })
        },[]);


    return (<>
        <Backdrop style={{backgroundImage: `url(${mistymountain})`}}>
       
            <Header>
            <TriangleMotifVertical transform={"rotate(-90)"} width={"inherit"}></TriangleMotifVertical>
            <h1 style={{color:"white"}}>THE G4 TEAM</h1>
            <TriangleMotifVertical transform={"rotate(-90)"} width={"inherit"}></TriangleMotifVertical>
            </Header>
            { !loaded
            ? <h1>loading</h1>
            : [ <Wrapper>
                {team.map((teamMember) => {
                return <TeamMate teamMember={teamMember}/>
                })}
                </Wrapper>
            ]}
        </Backdrop>
    </>)
}

const Header = styled.div`
    display: flex;
    height:20vh;
    justify-content: center;
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 3%;
    position: relative;
    width: 65%;
    margin: auto;

`

const Backdrop = styled.div`

background-size: cover;
min-height: 100vh;
`

export default Team;

