import AddEvent from "./Forms/AddEvent";
import { useState } from "react";


const AdminEvents = () => {
    const [currentFunction, setCurrentFunction] = useState ("");

    return(<>
        <h3>Events</h3>
        <button>add</button>
        <button>edit</button>
        <button>delete</button>
        {currentFunction === "add" && <AddEvent/>}
    </>)
    
}

export default AdminEvents;