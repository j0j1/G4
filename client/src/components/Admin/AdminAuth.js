import { useEffect, useState } from "react";
import styled from "styled-components";
import Admin from "./Admin";
import FullPage from "../Geometrics/FullPage"
import LogoSVG from "../Geometrics/LogoSVG"

const AdminAuth = ({userType, setUserType}) => {
    const [signedIn, setSignedIn] = useState(false);
    const [userName, setUserName] = useState("dupa");
    const [password, setPassword] = useState("dupa")

    console.log("IN THIS BITCH","singedin==",signedIn,"usertpe=",userType )

    if (signedIn===false) {
        console.log("IDSIGNed","singedin==",signedIn,"usertpe=",userType )
        setUserType("unsigned");
        console.log("IDSIGNedAFTER","singedin==",signedIn,"usertpe=",userType )
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const expressRes = await fetch("/api/auth/signin", {
            method: "POST",
            body: JSON.stringify({
                userName:userName,
                password:password
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        const data = await expressRes.json();
        console.log(data);
        if (data.status===200){
        setSignedIn(true);
        setUserType("admin");
        } else {
            window.alert("authentication error")
        }
        
    }

    return (<>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <LogoSVG height={"15vh"}/>
        <h1>admin</h1>
    </div>
    <FullPage>
        {signedIn === false 
        ?<Wrapper>
            <form onSubmit={handleLogin} style={{display:"flex", flexDirection:"column"}}>
                <label>Username</label>
                <input type="username" onChange={((e) => setUserName(e.target.value)) } style={{width:"15vw"}}></input>
                <label>Password</label>
                <input type="password" onChange={((e) => setPassword(e.target.value))} style={{width:"15vw"}}></input>
                <button type="submit" style={{width:"10vw", marginTop:"1%"}}>submit</button>
            </form>
        </Wrapper>
        :<Admin/>
    }
    </FullPage>
    </>)
}

const Wrapper = styled.div`
`

export default AdminAuth;