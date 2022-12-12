import styled from "styled-components"
import LogoSVG from "./Geometrics/LogoSVG"
import StarBlanketStokeFill from "./Geometrics/StarBlanketStrokeFill"


const HomePage = () => {

    return(
    <Wrapper>
        <Decoration>
            <StarBlanketStokeFill height={"70vh"}/>
            <StarBlanketStokeFill height={"70vh"}/>
        </Decoration>
        <Content>        
            <Container>
                <Text2>STONEY NAKODA - TSUUT’INA TRIBAL COUNCIL LTD.</Text2>
                <LogoMain>
                    <LogoSVG fill={"#FFD8AA"} width={"97%"}/>
                </LogoMain>
            </Container>
            <LogosContainer>
                <a  target="blank" href="https://stoneynakodanations.com/">
                    <NationLogo src="../images/logos/chiknilogo.png"/>
                </a>
                <a  target="blank" href="https://tsuutina.com/">
                    <NationLogo src="../images/logos/tsuutinalogo.png"/>
                </a>
                <a  target="blank" href="https://stoneynakodanations.com/">
                    <NationLogo src="../images/logos/wesleylogo.png"/>
                </a>
                <a  target="blank" href="https://www.bearspawfirstnation.ca/">
                    <NationLogo src="../images/logos/bearspawlogo.png"/>
                </a>
            </LogosContainer>
        </Content>

    </Wrapper>
    )

}

const Content = styled.div`
    height:85vh;
    width:100%;
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
`

const Decoration = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    mix-blend-mode:overlay;
    opacity: 0.6;
    width:100%;
`

const LogoMain = styled.div`
`

const LogosContainer = styled.div`
    filter: grayscale(100);

    mix-blend-mode: multiply;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width:95vw;
    margin-bottom:5%;
`

const Container = styled.div`
    width:fit-content;
    background: rgb(73,58,105);
    background: linear-gradient(180deg, rgba(73,58,105,1) 20%, rgba(127,90,149,0.964992312565903) 45%, rgba(137,90,131,0.4036426193143693) 56%, rgba(152,114,122,0.19812114692173122) 70%, rgba(152,114,122,0) 82%);
    text-align: center;
    @media (max-width: 482px) {
        width: 100vw;
    }
`
const Wrapper = styled.div`
    background-image: url("../images/prairiesunset.jpg");
    position:relative;
    height:fit-content;
    min-height:85vh;
    overflow: hidden;
    display: flex;
    background-repeat: no-repeat;
    background-position: left top;
    background-size: cover;
`
const Text1 = styled.div `
    font-size: 700px;
    position:absolute;
    top:-600px;
    left:-300px;
`

const Text2 = styled.h2 `
    color:#FFD8AA;
    font-family: 'Quattrocento Sans', sans-serif;
    font-weight: 700;
    font-size: 30px;
    @media (max-width: 480px) {
        font-size: 17px;
    }
`
const Text3 = styled.div `
    font-family: 'Roboto Flex', sans-serif;
    position:absolute;
    font-size: 25px;
    text-align: left;
    background: white;
    padding:20px;
    width:300px;
    top:200px;
    left:40px;
    opacity: 0.5;
`

const NationLogo = styled.img`
    height: 150px;
    @media (max-width: 950px) {
        height: 125px;
    }
    @media (max-width: 750px) {
        height: 100px;
    }
`
export default HomePage;