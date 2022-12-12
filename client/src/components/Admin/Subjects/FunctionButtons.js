const FunctionButtons = ({currentFunction, setCurrentFunction}) => {

    return (<>
        <button onClick={(e)=>setCurrentFunction("add")}>add</button>
        <button onClick={(e)=>setCurrentFunction("edit")}>edit</button>
        <button onClick={(e)=>setCurrentFunction("delete")}>delete</button>
    </>)

}

export default FunctionButtons;