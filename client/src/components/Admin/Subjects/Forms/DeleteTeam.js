import { useEffect, useState } from "react";

const DeleteTeam = ({setCurrentFunction, setCurrentSubject}) => {
    const [loaded, setLoaded] = useState (false);
    const [team, setTeam] = useState ([]);
    const [teamToDelete, setTeamToDelete] = useState({});
    const [isSelected, setIsSelected] = useState(false);
    const [status, setStatus] = useState("")

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
    
    //assigns the selected teammate to be deleted
    const handleSelect = (e) => {
        const indexOfDeletee = e.target.value;
        setTeamToDelete(team[indexOfDeletee]);
        setIsSelected(true)
    }

    const handleDelete = (e) => {
        e.preventDefault();
        console.log(teamToDelete._id)
        if (window.confirm(`are you sure you want to permanently delete ${teamToDelete.firstName + " " + teamToDelete.lastName}  from the database?`)) {
            fetch(`/api/delete_team/${teamToDelete.teamId}`, { method: 'DELETE' })
            .then(async response => {
                const data = await response.json();
                console.log(data, "DAAATTTTAAAAA")
                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    setStatus(error);
                    window.alert("Error, teammate could not be deleted at this time")
                    return Promise.reject(error);      
                }
                window.alert('Delete teammate successful');
                setCurrentFunction("");
                setCurrentSubject("")
            })
        }
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
        {isSelected &&<button onClick={(handleDelete)}>Delete</button>}
        {status === 'Delete successful' && <h1>That, {teamToDelete} bitch is gone</h1>}
        {status === 'something bad happened' && <h1> error occured please try again later</h1>}
        
    </>)
}


export default DeleteTeam;