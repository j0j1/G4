import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminEvents from "./Subjects/AdminEvents";
import FunctionButtons from "./Subjects/FunctionButtons";
import FormManifestor from "./Subjects/Forms/FormManifestor";


const Admin = () => {
    const [currentSubject, setCurrentSubject] = useState("");
    const [currentFunction, setCurrentFunction] = useState("");
    const subjects = ["Events", "Team"];

    useEffect(() => {

    },[currentFunction, currentSubject])

    return (<>
        {subjects.map((subject) => {
            return <button onClick={(e)=>setCurrentSubject(subject)}>{subject}</button>
        })}

        {currentSubject.length > 0 && (<>
            <h3>{currentSubject}</h3>
            <FunctionButtons currentFunction={currentFunction} setCurrentFunction={setCurrentFunction}/>
            </>)}
        {currentFunction.length > 0 && (<>
            <h2>{currentFunction} {currentSubject}</h2>
            <FormManifestor currentFunction={currentFunction} currentSubject={currentSubject} setCurrentFunction={setCurrentFunction} setCurrentSubject={setCurrentSubject}/>
        </>)}

    </>)

}

export default Admin