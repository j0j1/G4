import styled from "styled-components";
import Arrow from "../../Geometrics/Arrow";
import StoneyMotif2 from "../../Geometrics/StoneyMotif2";
import LogoRange from "../../Geometrics/LogoRange";
import { Section, SectionLeft, SectionRight } from "../../AnimationPresets/AnimationPresets";
import StarBlanket from "../../Geometrics/StarBlanket";
import { motion } from "framer-motion";
import StoneyBig from "../../Geometrics/StoneyBig";
import StarBlanketStokeFill from "../../Geometrics/StarBlanketStrokeFill";
import TriangleMotifVertical from "../../Geometrics/TriangleMotifVertical";


const Commitments = () => {
    const colors = ["#303038", "#6DB1C7", "#ED7268", "#E8C996", "#BE7E42", "#5B485C", "#963A3E"]

    return (
        <Wrapper>
            <Banner>
                <div style={{position:"absolute", zIndex:"10"}}>

                <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.8 }}
                    >

                    <Logo>
                        
                        <h1 style={{fontSize:"60px", marginTop:"10%", color:"white"}}>REACHING HOME </h1>
                        <h1 style={{fontSize:"50px"}}>Canada's Homelessness Strategy</h1>
                    </Logo>
                </motion.div>
                <div style={{position:"relative", top:"-1450px", left:"850px", opacity:"0.7"}}>
                    <motion.div
                        animate={{ rotateX: 65 }}
                        transition={{
                            repeatType: "reverse",
                            repeat: Infinity,
                            duration: 40
                        }}
                        >
                        {/* <StarBlanketStokeFill height={"46vh"}/> */}
                        <TriangleMotifVertical transform={"rotate(-110) "} height={"3400px"} fill1={colors[3]} fill2={colors[1]} fill3={colors[4]} fill4={colors[2]}/>
                    </motion.div>
                </div>
                </div>
                <Colorizer/>
            </Banner>
            <SectionLeft>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"80vw"} fill1={colors[7]} fill2={colors[1]} fill3={colors[0]} fill4={colors[2]}/>
            </SectionLeft>
            <Section>
                <HorizontalChunk>
                    <h1>What is Reaching Home?</h1>
                    <TextChunk>
                        <p>Reaching Home is a community-based program aimed at preventing and reducing homeless in Canada. This program provides funding to urban, Indigenous, rural & remote communities to assist to address local homelessness needs.
                            The Goal of the program is to support the National Housing Strategy to reduce chronic homelessness by 50% by 2027.
                        </p>
                    </TextChunk>
                </HorizontalChunk>
            </Section>
            <SectionLeft>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"} transform={"scale(1,-1)"} fill1={colors[7]} fill2={colors[1]} fill3={colors[0]} fill4={colors[2]}/>
                <div style={{marginTop:"-4px"}}>
                    <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"} fill1={colors[7]} fill2={colors[1]} fill3={colors[0]} fill4={colors[2]}/>
                </div>
            </SectionLeft>

            <Section>
                <LeftChunk style={{width:"fit-content"}}>
                    <div style={{marginLeft:"27vw"}}>
                        <h1>What is Reaching Home?</h1>
                        
                    </div>
                    <TextChunk>
                    
                        <p>
                            RH Directives provide guidance, details and expectations related
                            to program requirements to assist communities in preventing
                            and reducing homelessness.

                            G4 was recommended to take this on by the Indigenous
                            Community Advisory Board (CAB) (ICAB).

                            The CAB is a voluntary position that are made up of community
                            board members from Treaty 7 Nations.
                        </p>
                        <p>
                            Homelessness has an impact on every community across Canada. In 2016 there was an estimated 129,000 people experiencing
                            homelessness at an emergency shelter. Therefore Infrastructure Canada has committed to 2.2 billion
                            dollars to tackle homelessness across the country.
                        </p>
                        <p>
                        This fund was held with CHF for 23 years.
                        CHF chose voluntarily to not be the Community Entity in the Spring of
                        2021.
                        ICAB then recommended G4 to become the CE.
                        At the time, a revenue of 1 million. To date, this fund is operating at 7
                        million per year.
                        </p>


                    </TextChunk>
                </LeftChunk>
            </Section>
            
            <SectionRight>
                <StoneyMotif2 xStart={"500"} yStart={"475"}  yEnd={"260"} transform={"scale(-1,-1)"} fill1={colors[5]} fill2={colors[2]} fill3={colors[0]} fill4={colors[1]}/>
                <div style={{marginTop:"-5px"}}>
                <StoneyMotif2 xStart={"500"} yStart={"475"}  yEnd={"260"} transform={"scale(-1,1)"} fill1={colors[5]} fill2={colors[2]} fill3={colors[0]} fill4={colors[1]}/>
                </div>
            </SectionRight>
            <Section>
                <TopShift>
                    <LeftChunk style={{}}>
                        <div style={{maxWidth:"500px", alignSelf:"flex-start"}}>
                            <h1>What is the role of ICAB?</h1>
                            <h4>The role of the Indigenous Community Advisory Board (ICAB) is to set
                            the direction to address Indigenous homelessness in Calgary</h4>
                        </div>
                        <TextChunk style={{maxWidth:"400px", alignSelf:"flex-end", paddingTop:"5vw"}}>
                            <p>
                            Their responsibilities include:
                            <ul> 
                                <li>Gathering relevant info related to Indigenous homelessness to identify community priorities</li>
                                <li>Addressing and recommending projects for funding to G4</li>
                                <li>Supporting G4 (CE) to plan and coordinate a community-side effort to prevent and address Indigenous Homelessness</li>
                                <li>Develop a terms of reference and other policies & procedures central to fulfilling the responsibilities of the ICAB</li>
                            </ul>
                            </p>
                        </TextChunk>
                    </LeftChunk>
                </TopShift>
            </Section>
            <SectionLeft>
                <StoneyMotif2 xStart={"500"} yStart={"475"}  yEnd={"260"} transform={"scale(1,-1)"} fill1={colors[0]} fill2={colors[1]} fill3={colors[6]} fill4={colors[5]}/>
                <div style={{marginTop:"-5px"}}>
                <StoneyMotif2 xStart={"500"} yStart={"475"}  yEnd={"260"} fill1={colors[0]} fill2={colors[1]} fill3={colors[6]} fill4={colors[5]}/>
                </div>
            </SectionLeft>
            <Section>
                <HorizontalChunk>
                    <div style={{maxWidth:"400px"}}>
                        <h1>What is G4’s role?</h1>
                    </div>
                    <TextChunk>
                        <p>
                            G4 is responsible for managing the fund. We provide support and guidance to the CAB and assist with project approvals. To date G4 has inherited 5 organizations with 7 projects. Our sub agreements include:
                            <ul><li style={{fontSize:"12px"}}>
                            Elizabeth Fry Society of Calgary, Metis Calgary Family Services Society,
                            McMan Youth and Family Community Services Association, Trellis Society for
                            Community Impact; and the Aboriginal Friendship Centre of Calgary
                            </li></ul>
                        </p>
                    </TextChunk>
                </HorizontalChunk>
            </Section>
            <SectionRight>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"} transform={"scale(-1,-1)"} fill1={colors[0]} fill2={colors[1]} fill3={colors[4]} fill4={colors[6]}/>
                <div style={{marginTop:"-2px"}}>
                    <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"} transform={"scale(-1,1)"} fill1={colors[0]} fill2={colors[1]} fill3={colors[4]} fill4={colors[6]}/>
                </div>
            </SectionRight>
            <Section>
                <HorizontalChunk>
                    <div style={{maxWidth:"400px", marginTop:"-50px"}}>
                        <h1>What is G4’s role?</h1>
                        <h4>In addition roles we carry out with each sub agreement holder include:</h4>
                    </div>
                    <TextChunk style={{maxWidth:"500px"}}>
                        <ul> 
                            <li>Receive all requests for funding</li>
                            <li>Working with community stakeholders to over see development and implementation to address homelessness</li>
                            <li>Conduct an RFP Process!</li>
                            <li>Develop contracts and monitor all projects</li>
                            <li>Reporting on all activities</li>
                        </ul>
                    </TextChunk>
                </HorizontalChunk>
            </Section>
            <SectionRight>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"} transform={"scale(-1,-1)"} fill1={colors[0]} fill2={colors[1]} fill3={colors[4]} fill4={colors[6]}/>
                <div style={{marginTop:"-2px"}}>
                    <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"} transform={"scale(-1,1)"} fill1={colors[0]} fill2={colors[1]} fill3={colors[4]} fill4={colors[6]}/>
                </div>
            </SectionRight>
            <Section>
                <TopShift>
                    <HorizontalChunk>
                        <h1 style={{maxWidth:"400px"}}>How do organizations receive funding?</h1>
                        <TextChunk>
                            <p> 
                                Funding being allocated to initiatives that address outcomes identified in a community plan are recommended by the Community Advisory Board (CAB).
                                <br/>
                                There is an RFP process, which we are currently working on. This is where experience with sitting on review committees and working with other CE’s come into play
                            </p>
                        </TextChunk>
                    </HorizontalChunk>
                </TopShift>
            </Section>
            <SectionLeft>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"} transform={"scale(1,-1)"} fill1={colors[1]} fill2={colors[2]} fill3={colors[5]} fill4={colors[0]}/>
            </SectionLeft>
        </Wrapper>
    )
};

export default Commitments;

const Banner = styled.div`
    height:85vh;
    position:relative;
    overflow: hidden;
    background-image: url(../images/oldfence.jpg);
    background-repeat: no-repeat;
    background-position: left top;
    background-size: cover;
`

const Logo = styled.div`
    width:85vw;
    position:absolute;
    z-index: 2;
    color:white;
    text-shadow: 3px 3px 10px #555;
    padding-left: 3%;
`

const Top = styled.div`
    font-size: 80;

`
const Wrapper = styled.div`
    max-width: 100vw;
    background-color: "#ED7268";
    overflow: hidden;
`
const TextChunk = styled.div`
    max-width: 85vw;
    font-size: 14px;
    padding: 0.5%;
`

const HorizontalChunk = styled.div`
    display: flex;
    align-items: center;
    padding-left: 5%;
    gap:30px;
    flex-wrap: wrap;
    font-size: 35vw;
`
const LeftChunk = styled.div`
    display: flex;
    align-items: flex-start;
    width:95%;
    gap:5%;
    padding-left:5%;
    flex-wrap: wrap;
`
const TopChunk = styled.div`
    display: flex;
    padding: 1%;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
`

const Colorizer = styled.div`
    background-color:#ED7268;
    height:100%;
    width:100%;
    opacity: 0.6;
    position: absolute;
    z-index:3;
`

const TopShift = styled.div`
    @media (min-width: 768px) {
    margin-top: -70px;
    padding-right: 15%;
  }
`