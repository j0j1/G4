import StoneyMotif from "../../Geometrics/StoneyMotif"
import styled from "styled-components"
import { motion } from "framer-motion"
import StarBlanketStrokeFill from "../../Geometrics/StarBlanketStrokeFill"

const Landing = () => {
    const colors = ["#303038", "#6DB1C7", "#ED7268", "#E8C996", "#BE7E42", "#5B485C", "#963A3E"];
    return(<>
    <Wrapper>
    <div style={{position:"absolute", zIndex:"10", width:"100vw"}}>
        <ImgLogo src="../../images/g4HEALTHlogo.png"/>
    
        <div style={{position:"relative", top:"-100vh", margin:"auto", opacity:"0.3"}}>
                    <motion.div
                        animate={{ rotate: 100 }}
                        transition={{
                            repeat: Infinity,
                            duration: 40
                        }}
                        >
                        <StarBlanketStrokeFill height={"200vh"} fill={"none"} stroke={colors[3]} strokeWidth={"5px"}/>
                    </motion.div>
                    </div>
                </div>
                <Colorizer/>
    </Wrapper>
    </>)
}

const Wrapper = styled.div`
    height:86vh;
    overflow: hidden;
    background-image: url(../images/oldfence.jpg);
    background-repeat: no-repeat;
    background-position: left top;
    background-size: cover;
    position: relative;
`

const Container = styled.div`
    display:flex;
    justify-content: center;
    height: inherit;
    position: absolute;
    z-index: 2;
`
const Text = styled.div`
    height:60%;
    height:auto;
    border:red solid 2px;
    position: absolute;
    `

const Background = styled.div`
    height: inherit;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    background: lightgray;
`
const ImgLogo = styled.img`
    width:90%;
    margin:auto;
    position: absolute;
    z-index: 5;
`

const Colorizer = styled.div`
    background-color:#6DB1C7;
    height:100%;
    width:100%;
    opacity: 0.3;
    position: absolute;
    z-index:3;
`


export default Landing