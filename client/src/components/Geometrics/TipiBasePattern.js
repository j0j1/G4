import TipiBaseTile from "./TipiBaseTile";
import styled from "styled-components";

const TipiBasePattern = ({pointsNo}) => {

    return (<>
    <Wrapper>    {[...Array(pointsNo)].map(()=>{
        return <StyleTipiBaseTile/>})}
    </Wrapper>

    </>)
}

const Wrapper = styled.div`
    display:flex;
    fill:black;
`

const StyleTipiBaseTile = styled(TipiBaseTile)`
    display:flex;

`

export default TipiBasePattern;