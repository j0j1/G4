import styled from "styled-components"
import TriCorner from "./TriCorner"

const TriLineBottom = ({color, height=60}) => {
    return(<>
    <LineBottom>
    {[...Array(7)].map((i,j) => {
         return <TriCorner scale={height+(j*10)} color={color} orientation={"topRight"}/>
    })}
    {[...Array(7)].map((i,j) => {
         return <TriCorner scale={(height+(6*10))-j*10} color={color} orientation={"topLeft"}/>
    })}
    </LineBottom>
    </>)
}

export default TriLineBottom;

const LineBottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`
  