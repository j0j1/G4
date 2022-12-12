import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar1 from "./components/NavBar";
import About from "./components/About";
import HomePage from "./components/HomePage";
import Events from "./components/Events";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AdminAuth from "./components/Admin/AdminAuth"
import Department from "./components/Departments/Department";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import AdminEvents from "./components/Admin/Subjects/AdminEvents";
import AdminTeam from "./components/Admin/Subjects/AdminTeam";
import AdminPhotos from "./components/Admin/Subjects/AdminPhotos";
import mistymountain from './images/mistymountain.jpg'

const App = () => {
  const [userType, setUserType] = useState("visitor");

  // useEffect(() =>{
  //   console.log(userType+"HEYOOOO")
  // }, [userType])

  return (<>
    <Router>
      {userType === "visitor" && <NavBar1/>}
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/events" element={<Events mistymountain={mistymountain}/>} />
        <Route path="/team" element={<Team mistymountain={mistymountain}/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/admin" element={<AdminAuth userType={userType} setUserType={setUserType}/>} />
        <Route path="/department/:departmentId" element={<Department mistymountain={mistymountain}/>} />
        {userType==="admin" && <>
          <Route path="/admin/events" element={<AdminEvents/>} />
          <Route path="/admin/team" element={<AdminTeam/>} />
          <Route path="/admin/photos" element={<AdminPhotos/>} />
          </>
        }
      </Routes>


    </Router>


</>);
}

// const NavBarStyled = styled(NavBar)`
//   position: fixed;
//   top:0;
// `

export default App;
