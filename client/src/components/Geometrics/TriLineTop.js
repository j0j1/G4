import styled from "styled-components"
import TriCorner from "./TriCorner"

const TriLineTop = ({color}) => {

    return(<>
        <LineTop>
        {[...Array(7)].map((i,j) => {
             return <TriCorner scale={60+j*10} color={color} orientation={"bottomRight"}/>
        })}
        {[...Array(7)].map((i,j) => {
             return <TriCorner scale={120-j*10} color={color} orientation={"bottomLeft"}/>
        })}
        </LineTop>
    </>)
}


const LineTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    /* border: 2px solid black; */
`

export default TriLineTop;