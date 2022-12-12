import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import EditTeamPhoto from "./EditTeamPhoto";
import EditTeamWritten from "./EditTeamWriten";


const EditTeam = ({setCurrentFunction, setCurrentSubject}) => {
    const [loaded, setLoaded] = useState (false);
    const [team, setTeam] = useState ([]);
    const [teamToEdit, setTeamToEdit] = useState({});
    const [isSelected, setIsSelected] = useState(false);
    const [currentEdit, setCurrentEdit] = useState("");
    
    //fetches list of current team
    useEffect(() => {
        fetch('/api/getg4team')
            .then(res => res.json())
            .then((data) => {
                console.log(data.data)
                setTeam(data.data)
                setLoaded(true)
            })
        },[]);
        
    const handleSelect = (e) => {
        const indexOfeditee = e.target.value;
        setTeamToEdit(team[indexOfeditee]);
        setIsSelected(true)
    }

    return (<>
        {loaded
            ?<select onChange={(e) => handleSelect(e)}>
                <option disabled="true">choose teammember</option>
                {team.map((teammember,i) => {
                    return <option value={i}>{teammember.firstName} {teammember.lastName}</option>})}
            </select>
            :<h2>loading</h2>
        }
        {isSelected && [<>
            <button onClick={(e)=>setCurrentEdit("written")}>written</button>
            <button onClick={(e)=>setCurrentEdit("photo")}>photo</button>
            {currentEdit === "written" && <EditTeamWritten teamToEdit={teamToEdit} setTeamtoEdit={setTeamToEdit} setCurrentFunction={setCurrentFunction} setCurrentSubject={setCurrentSubject} setCurrentEdit={setCurrentEdit} setTeamToEdit={setTeamToEdit}/>}
            {currentEdit === "photo" && <EditTeamPhoto teamToEdit={teamToEdit} setTeamtoEdit={setTeamToEdit} setCurrentFunction={setCurrentFunction} setCurrentSubject={setCurrentSubject} setCurrentEdit={setCurrentEdit} setTeamToEdit={setTeamToEdit}/>}
        </>]}
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

export default EditTeam;