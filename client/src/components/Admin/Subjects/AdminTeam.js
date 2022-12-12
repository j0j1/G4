import { useState } from "react";
import AddTeam from "./Forms/AddTeam";

const AdminTeam = () => {
    const [currentFunction, setCurrentFunction] = useState ("");


    return(<>
        <h3>Team</h3>
        <button onClick={(e)=>setCurrentFunction("add")}>add</button>
        <button onClick={(e)=>setCurrentFunction("edit")}>edit</button>
        <button onClick={(e)=>setCurrentFunction("delete")}>delete</button>
        <h5>{currentFunction}</h5>
        {currentFunction==="add" && <AddTeam/>}
    </>)

}

export default AdminTeam;