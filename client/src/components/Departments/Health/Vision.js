import styled from "styled-components"

import LogoRange from "../../Geometrics/LogoRange"
import StoneyMotif from "../../Geometrics/StoneyMotif"

const Vision = () => {
    return (<>
        
        <Wrapper>
            <Text>
                <div>
                <h1>OUR VISION</h1>
                <h2>Empowered Iyethka and Tsuut’ina First Nations peoples leading the health and wellbeing of their individual nations.</h2>
                </div>
                <div>
                <h1>OUR MISSION</h1>
                <h2>G4 Health respectfully represents the Iyethka and Tsuut’ina First Nations in Health and Wellness. G4 health is committed to advocating, collaborating, and striving towards healthier and empowered Iyehtka and Tsuut’ina First Nations.</h2>
                </div>
            </Text>
        </Wrapper>
    </>)
}

const Wrapper = styled.div`
    background-image: url(../images/backClose.jpg);
    background-repeat: no-repeat;
    background-position: right top;
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column; 
`

const Text = styled.div`
    width:45vw;
    color:white;
    text-shadow: 3px 3px 5px #000;
    margin: 40px;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    margin: auto;
    @media (max-width: 768px) {
        width:100vw;
        padding:2%;
    }
`

export default Vision