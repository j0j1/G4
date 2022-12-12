import styled from "styled-components";
import Arrow from "../../Geometrics/Arrow";
import StoneyMotif2 from "../../Geometrics/StoneyMotif2";
import LogoRange from "../../Geometrics/LogoRange";
import { Section, SectionLeft, SectionRight } from "../../AnimationPresets/AnimationPresets";
import StarBlanket from "../../Geometrics/StarBlanket";
import { motion } from "framer-motion";
import StoneyBig from "../../Geometrics/StoneyBig";


const Commitments = () => {
    const colors = ["#303038", "#6DB1C7", "#ED7268", "#E8C996", "#BE7E42", "#5B485C", "#963A3E"]

    return (
        <Wrapper>
            <Banner>
                <Logo>
                    
                    <h1 style={{fontSize:"20vw"}}>G4 </h1>
                    <h1 style={{fontSize:"20vw"}}> JUSTICE</h1>
                </Logo>
                <div style={{position:"relative", top:"-250px", right:"-40px", mixBlendMode:"soft-light"}}>
                <motion.div
                    animate={{ rotateZ: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 40
                    }}
                >
                
                <StarBlanket height={"300vh"}/>
                </motion.div>
                </div>
            </Banner>
            <SectionLeft>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"} fill1={colors[7]} fill2={colors[1]} fill3={colors[0]} fill4={colors[2]}/>
            </SectionLeft>
            <Section>
                <HorizontalChunk>
                    <h1>G4 Justice:</h1>
                    <TextChunk>
                        <p>Our goal in G4 Justice is to bring resourceful, sustainable, respectful,
                            responsible, and equitable solutions to the G4 communities. Utilizing
                            traditional ways of knowing and with consultation from our Elders and knowledge keepers we
                            strive to find solutions that will uplift and uphold our ways of life for generations to come. We
                            work to create solutions to the Justice system for our First Nations people, solutions that are
                            rooted in our ways of knowing, solutions that work to uphold the systems of Justice for a First
                            Nations People.
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
                <LeftChunk>
                    <div style={{maxWidth:"400px"}}>
                        <h1>G4 Justice:</h1>
                    </div>
                    <TextChunk>
                        <p>
                        The G4 Justice mandate is to determine solutions to ongoing issues within the Federal and
                        Provincial Justice systems. Solutions that will better assist First Nations communities thrive and
                        uphold the promise and honour of Treaty 7. We work to answer the calls to action from the
                        communities and put action into the Governments calls to reconciliation.
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
                    <TopChunk style={{}}>
                        <div style={{maxWidth:"400px"}}>
                            <h1>Current work: MMIWG</h1>
                        </div>
                        <TextChunk style={{width:"450px"}}>
                            <p>
                            Continue to determine solutions to the issue of our Murdered and Missing Indigenous Women
                            and Girls/ People. (MMIWG). We work directly with the community members that have been
                            directly affected by this issue to determine workable solutions for the people of our G4
                            communities. Understanding Our Voices- a report from the G4 communities, Published July
                            2022. Continued engagement with the communities will be ongoing, with development on
                            solutions to continue with the community members.
                            </p>
                        </TextChunk>
                    </TopChunk>
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
                        <h1>First Nations and Inuit Policing Program review.</h1>
                    </div>
                    <TextChunk>
                        <p>
                            Working with the chiefs and Policing services of the Tsuut’ina Nation, RCMP, Alberta Justice
                            solicitor general, and public safety Canada, G4 works to find solutions to the prohibitive nature
                            of the current policing programs First Nations are forced to work under. This work is ongoing
                            with a Position paper published April 2022.
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
                        <h1 style={{maxWidth:"300px", fontSize:"20px",marginTop:"-50px"}}>RAPID Response-<br/> First Nations Workable relationship with Alberta Fish and Wildlife.</h1>
                    <TextChunk>
                        <p>
                            Working with stake holders in the communities, we work with the programs and societies to
                            determine how Alberta Fish and Wildlife may find ways to work with the Stewarts of the lands
                            and how Alberta Fish and Wildlife may begin to repair their strained and broken relationship
                            with the G4 First Nations.
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
                <TopShift>
                    <HorizontalChunk>
                        <h1 style={{maxWidth:"400px"}}>Determining our Own Adjudication system on Tsuut’ina Nation.</h1>
                        <TextChunk>
                            <p> 
                            Working with Tsuut’ina General legal counsel. G4 Justice is currently working on how to set up
                            the Tsuut’ina nation Court system so we may uphold our own laws and bylaws within our lands.
                            <br/>
                            This work will be also engaged with on the Stoney lands to determine how this may also be
                            done.
                            <br/>
                            For more information, please reach out to G4 Justice.
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
    max-height:100vh;
    overflow: hidden;
    background-image: url(../images/mistymountain.jpg);
    background-repeat: no-repeat;
    background-position: left top;
    background-size: cover;
`

const Logo = styled.div`
    width:70%;
    position:absolute;
    z-index: 2;
    color:whitesmoke;
    text-shadow: 3px 3px 5px #5555;
`

const Top = styled.div`
    font-size: 80;

`
const Wrapper = styled.div`
    max-width: 100vw;
    background-color: #F9F5F3;
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
`
const LeftChunk = styled.div`
    display: flex;
    align-items: center;
    gap:5%;
    padding-left: 15%;
    flex-wrap: wrap;
`
const TopChunk = styled.div`
    display: flex;
    padding: 1%;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
`

const TopShift = styled.div`
    @media (min-width: 768px) {
    margin-top: -80px;
    padding-right: 15%;
  }
`