import styled from "styled-components";
import TriBottomLeft from "./TriCorner";
import TriCorner from "./TriCorner";
import TriBottomRight from "./TriLineBottom";
import TriLineBottom from "./TriLineBottom";
import TriLineTop from "./TriLineTop";

const TriLine = () => {

    return (<>
    <Wrapper>
        <TriLineTop/>
        <TriLineBottom/>
    </Wrapper>
    </>)

}




const Wrapper = styled.div`
`

const MidWrapper = styled.div`
    display:flex;
    justify-content: flex-end;
`
export default TriLine