import styled from "styled-components"
import TriLineBottom from "./TriLineBottom"
import TriangleMotifVertical from "./TriangleMotifVertical"


const FullPage = ({children}) => {
    const colors = ["#303038", "#6DB1C7", "#ED7268", "#E8C996", "#BE7E42", "#5B485C", "#963A3E"]
    return(
        <Wrapper>
                <Decoration style={{background:`${colors[4]}`}}>
                    <TriangleMotifVertical height={"150vh"} xStart={"0"} yStart={"55"} fill1={colors[6]} fill2={colors[2]} fill3={colors[5]} />
                </Decoration>

            <Meat>
                <div style={{height:"10%", transform:"scale(-1,-1)", marginTop:"1%"}}>
                    <TriLineBottom color={colors[6]} height={15}/>
                </div>
                    <Content>
                        {children}
                    </Content>
                <div style={{height:"20%", transform:"scale(-1,1)"}}>
                    <TriLineBottom color={colors[4]} height={15}/>
                    <div style={{transform:"scale(1,-1)"}}>
                    <TriLineBottom color={colors[5]} height={25} />
                    </div>
                </div>
            </Meat>
            
            <Decoration style={{background:`${colors[4]}`}}>
                <div style={{float:"right"}}>

                <TriangleMotifVertical height={"150vh"} xStart={"0"} yStart={"55"} fill1={colors[6]} fill2={colors[2]} fill3={colors[5]}/>
                </div>
            </Decoration>

        </Wrapper>
    )
}

const Decoration = styled.div`
    height:85vh;
    /* width:50vw; */
    overflow: hidden;
`
const G4 = styled.div`
   width:100%; 
   height:15vw; 
   text-align:center; 
   margin:auto;
`
const Meat = styled.div`
    width:70%;
    @media (max-width: 480px) {
        width:83%;
    }
    overflow: scroll;
`

const Content = styled.div`
    font-family: 'Fira Sans', sans-serif;
    background-color: #F9F5F3;
    font-size: 15px;
    font-weight: 500;
    height:fit-content;
    padding:5%;
    margin: 0;
    @media (max-width: 480px) {
        font-size: 13px;
    }
`
const Stripe = styled.div`
    background: #BF7B88;
    border: none;
`

const Wrapper = styled.div`
    max-height:85vh;
    background:#6DB1C7;
    display:flex;
    justify-content: space-evenly;
    overflow: hidden;
`

export default FullPage