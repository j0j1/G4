import styled from "styled-components";
import PodPod from "./PodPod";

const Podcast = () => {
    return (
    <Wrapper>
        <Container>
        <Icon>
            <ImgLogo src="../../images/buffaloHead.png" width="295px"/>
            <img src="../../images/microphoneicon.png" style={{width:"75px", padding:"15px", marginTop:"105px"}}/>
        </Icon>
        <div style={{paddingLeft:"3%"}}>
            <Headline>Listen to our podcast!</Headline>
            <h2>G4 Talks Health</h2>
            <p style={{width:"75%"}}>G4 Talks Health is a podcast series with a focus on empowering listeners by providing wholistic wellness information through discussions and interviews with Elders, health and wellness experts and Indigenous advocates. G4 Talks Health is presented by the Stoney Nakoda Tsuut'ina Tribal Council Health Team. Stay tuned monthly for great stories, information and laughs.
            </p>
        </div>
        </Container>

    <PodPod/>
    </Wrapper>
    )
}

export default Podcast;

const Headline = styled.h1`
    font-size: 60px;
    color: #BE7E42;
`

const Wrapper = styled.div`
    height:fit-content;
    background-color: rgba(109, 177, 199, 0.8);
`

const Container = styled.div`
    display: flex;
    width:100vw;
    justify-content: flex-end;
    align-items: flex-end;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    `


const Icon = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
`

const ImgLogo = styled.img`

`