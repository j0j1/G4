import StoneyMotif from "../../Geometrics/StoneyMotif"
import styled from "styled-components"
import Landing from "./Landing"
import Podcast from "./Podcast"
import Commitments from "./Commitments"
import Vision from "./Vision"

const Health = () => {

    return(
    <Wrapper>
    <Landing/>
    <Vision/>
    <Podcast/>
    <Commitments/>
   
    </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
`


export default Health