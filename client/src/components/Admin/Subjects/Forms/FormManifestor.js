import AddTeam from "./AddTeam"
import DeleteTeam from "./DeleteTeam"
import EditTeam from "./EditTeam"
import AddEvent from "./AddEvent"
import DeleteEvent from "./DeleteEvent"
import EditEvent from "./EditEvent"

const FormManifestor =  ({currentSubject, currentFunction, setCurrentFunction, setCurrentSubject}) => {

    return (<>
                {currentSubject === "Events" && (<>
            {currentFunction === "add" && <AddEvent setCurrentFunction={setCurrentFunction} setCurrentSubject={setCurrentSubject}/>}
            {currentFunction === "delete" && <DeleteEvent setCurrentFunction={setCurrentFunction} setCurrentSubject={setCurrentSubject}/>}
            {currentFunction === "edit" && <EditEvent setCurrentFunction={setCurrentFunction} setCurrentSubject={setCurrentSubject}/>}
        </>)}

        {currentSubject === "Team" && (<>
            {currentFunction === "add" && <AddTeam setCurrentFunction={setCurrentFunction} setCurrentSubject={setCurrentSubject} />}
            {currentFunction === "delete" && <DeleteTeam setCurrentFunction={setCurrentFunction} setCurrentSubject={setCurrentSubject}/>}
            {currentFunction === "edit" && <EditTeam setCurrentFunction={setCurrentFunction} setCurrentSubject={setCurrentSubject}/>}
        </>)}
    </>)

}

export default FormManifestor