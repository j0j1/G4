import { Link } from "react-router-dom"

const Projects = () => {
    return (<>
        <h1>__Departments?___</h1>
        <Link to="/department/health">Health</Link>
        <Link to="/department/education">Education</Link>
        <Link to="/department/housingandbusiness">Housing and Business Development</Link>
        <Link to="/department/justice">Justice</Link>
    </>)
}

export default Projects;