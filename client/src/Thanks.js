import styled from "styled-components"
import TipiBasePattern from "./components/Geometrics/TipiBasePattern"
import TriLineBottom from "./components/Geometrics/TriLineBottom"

const Thanks = () => {
    return(
    <Wrapper>
        <Holder>
            <div style={{opacity:"0.7"}}>
                <TriLineBottom color={"white"} height={20} />
            </div>
            <Container>
                <div>
                    <Merci>Sīyísgáàs</Merci>
                    <ThankYou>Thank you<br/> Tsuut’ina</ThankYou>
                </div>
                <div>
                    <Merci>Îsniyés</Merci>
                    <ThankYou>Thank you <br/> Stoney</ThankYou>
                </div>
            </Container>
            <div style={{justifySelf:"flex-end", opacity:"0.7"}}>
                <TipiBasePattern pointsNo={30} fill={"black"} />
            </div>
        </Holder>
        <Colorizer/>
    </Wrapper>)
}

const Holder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:20%;
    height:100%;
    width:100%;
    position: absolute;
    z-index: 5;
`

const Container = styled.div`
    display: flex;
    width:100%;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    z-index: 10;
    color:whitesmoke;
    @media (max-width:540px) {
        flex-direction: column;
        height:30%;
    }
`

const Merci = styled.h1`
    font-size: 50px;
    @media (max-width:380px) {
        font-size: 45px;
    }
`

const ThankYou = styled.h2``

const Colorizer = styled.div`
    background-color:#ED7268;
    height:100%;
    width:100%;
    opacity: 0.6;
    position: absolute;
    z-index:0;
`

const Wrapper = styled.div`
    height:100%;
    width:100%;
    position: absolute;
    z-index:0;
    height:100vh;
    background-image:url("../images/bison.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export default Thanks 