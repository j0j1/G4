import styled from "styled-components";
import Arrow from "../../Geometrics/Arrow";
import StoneyMotif2 from "../../Geometrics/StoneyMotif2";
import LogoRange from "../../Geometrics/LogoRange";
import { Section, SectionLeft, SectionRight } from "../../AnimationPresets/AnimationPresets";
import StarBlanket from "../../Geometrics/StarBlanket";
import { motion } from "framer-motion";
import StoneyBig from "../../Geometrics/StoneyBig";
import Thanks from "../../../Thanks";


const ChildServices = () => {
    const colors = ["#303038", "#6DB1C7", "#ED7268", "#E8C996", "#BE7E42", "#5B485C", "#963A3E"]

    return (
        <Wrapper>
            <Banner>
                <Logo>
                    
                    <h1 style={{fontSize:"37px"}}>"In Love and Respect for our Children" </h1>
                    <h1 style={{fontSize:"60px"}}> Child & Family Services</h1>
                    <h1 style={{fontSize:"25px"}}>Re-Centralize Children back to the Circle</h1>
                </Logo>
                <div style={{position:"relative", top:"-100vh", margin:"auto", mixBlendMode:"soft-light"}}>
                <motion.div
                    animate={{ rotate: 100 }}
                    transition={{
                        repeat: Infinity,
                        duration: 40
                    }}
                >
                    <StarBlanket height={"200vh"} fill5={colors[1]}/>
                </motion.div>
                </div>
            </Banner>
            <SectionLeft>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"} fill1={colors[7]} fill2={colors[1]} fill3={colors[0]} fill4={colors[2]} transform={"scale(-1,1)"}/>
            </SectionLeft>
            <Section>
                <HorizontalChunk>
                    <TopShift>
                        <h1 style={{maxWidth:"400px"}}>Strengthening our Families and Communities</h1>
                    </TopShift>
                    <TextChunk style={{maxWidth:"400px"}}>
                        <p>How do we keep our children protected and safe?
                            <ul>
                            <li>A Community approach to Child Welfare from the First Nations World view perspective. (It takes the Camp)</li>
                            <li>Families using informal support and network to help each other keep children safe, not solely on CFS responsibility.</li>
                            <li>Cultural revitalization to heal intergenerational trauma and deliver Trauma Informed services that promote connectedness to our traditional ways of knowing and being to treat chronic stress.</li>
                            </ul>
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
                        <h1>How has Colonization Harmed Us?</h1>
                    </div>
                    <TextChunk>
                    <ul> 
                        <li>Loss of Traditional family kinship and functioning and child rearing practices.</li>
                        <li>Assimilation policies are from White and Christian ideologies that are intrusive meant to control and surveillance of our families. (Profiling)</li>
                        <li>Eroded our Kinship systems, sacred relationships of relating, collective decision-making</li>
                        <li>Continued poverty and violence in our communities</li>
                        <li>Over representation on FN in CFS, Youth Justice, SFI</li>
                        <li>Elder’s deprived of central role in community</li>
                        <li>Socio-economic crisis ie housing, low education, health, basic necessities</li>
                    </ul>
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
                        <div style={{maxWidth:"600px"}}>
                            <h1>History</h1>
                            <h4>Timeline of Events of Disconnectedness, Erasure, and Violence on First Nation’s people. 155 years.</h4>
                        </div>
                            <TimeLine>
                                <HistoryEvent style={{borderLeft:"none" }}>
                                    <Order>1st Event</Order>
                                    <Date>April 12, 1876</Date>
                                    <Details>Indian Act Gov’t Colonial Laws to assimilate FNs, Metis and Inuit into Eurocentric Society</Details>
                                </HistoryEvent>
                                <HistoryEvent>
                                    <Order>2nd Event</Order>
                                    <Date>Sept 22, 1877</Date>
                                    <Details>Treaty 7 Signing</Details>
                                </HistoryEvent>
                                <HistoryEvent>
                                    <Order>3rd Event</Order>
                                    <Date>1887</Date>
                                    <Details>Topic of Assimilation</Details>
                                </HistoryEvent>
                                <HistoryEvent>
                                    <Order>4th Event</Order>
                                    <Date>1930’s</Date>
                                    <Details>Residential School <br/>Interrupted Childhoods <br/> Intergenerational Trauma from child Maltreatment</Details>
                                </HistoryEvent>
                                <HistoryEvent>
                                    <Order>5th Event</Order>
                                    <Date>1950’s</Date>
                                    <Details>Indian Act Amendment <br/> Provincial Laws apply to on-reserve</Details>
                                </HistoryEvent>
                                <HistoryEvent>
                                    <Order>6th Event</Order>
                                    <Date>1960’s - present</Date>
                                    <Details>Child and Family Authority <br/> 60’s scoop of children placed in white middle class families <br/> Apprehension on reserves
                                    </Details>
                                </HistoryEvent>
                            </TimeLine>
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
                        <h1>Restoring Kinship Worldview</h1>
                    </div>
                    <TextChunk>
                        <p>Critical for human survival and well-being of future generations:
                            <ul>
                                <li>Responsibility to respect and protect what gives life</li>
                                <li>Learning to be a family</li>
                                <li>Interdependence/interconnectedness</li>
                                <li>Life Enhancing role of Ceremony</li>
                                <li>Relational Healing</li>
                                <li>Decision making/mediation</li>
                                <li>Importance of elders role and children</li>
                                <li>Decolonizing</li>
                            </ul>
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
                <TopChunk>
                        <h1 style={{maxWidth:"50vw",  marginTop:"-50px"}}>Re-Centralizing our Children back in Community.</h1>
                    <TextChunk>
                        <ul>
                            <li>Listening to the children’s voice</li>
                            <li>Kinship Networks, Extended Family, Parents, and Child</li>
                            <li>Protecting our children, keeping them safefrom harm</li>
                            <li>Raising new warriors</li>
                            <li>Loved and belonged children</li>
                            <li>Nurturing strong identity</li>
                        </ul>
                    </TextChunk>
                </TopChunk>
            </Section>
            <SectionRight>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"} transform={"scale(-1,-1)"} fill1={colors[0]} fill2={colors[1]} fill3={colors[4]} fill4={colors[6]}/>
                <div style={{marginTop:"-2px"}}>
                    <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"} transform={"scale(-1,1)"} fill1={colors[0]} fill2={colors[1]} fill3={colors[4]} fill4={colors[6]}/>
                </div>
            </SectionRight>
            <Section>
                <TopShift>
                    <LeftChunk>
                        <h1 style={{maxWidth:"400px"}}>Bill C92 – Into Law January 1, 2020.</h1>
                        <TextChunk>
                            <p> 
                            Affirms the Rights of First Nation, Metis and Inuit people to exercise jurisdiction over child and family services. (Control and Authority)
                            <ul>
                                <li>Culturally appropriate processes and services to address child abuse and neglect</li>
                        
                                <li>Reduce FN’s children in care, early permanency</li>
                                <li>Prevention and Early Intervention</li>
                                <li>National Minimum Standards</li>
                                <li>Protocol Agreement</li>
                                <li>Work Plan – Bi-weekly meetings with Sub-table working group. Alberta Children’s Services</li>
                                <li>Sharing Data</li>
                                <li>Data Collection: Elder’s Advisory Committee</li>
                            </ul>
                            </p>
                        </TextChunk>
                    </LeftChunk>
                </TopShift>
            </Section>
            <SectionLeft>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"} transform={"scale(1,-1)"} fill1={colors[1]} fill2={colors[2]} fill3={colors[5]} fill4={colors[0]}/>
            </SectionLeft>
                <Thanks/>
        </Wrapper>
    )
};

export default ChildServices;

const Banner = styled.div`
    max-height:85vh;
    overflow: hidden;
    background: linear-gradient(180deg, rgba(100,58,105,1) 20%, rgba(127,90,149,0.964992312565903) 45%, rgba(137,90,131,0.7) 56%, rgba(152,114,122,0.62) 70%, rgba(152,114,122,0.5) 82%);
    background-repeat: no-repeat;
    background-position: left top;
    background-size: cover;
`

const Logo = styled.div`
    width:95%;
    height:85vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    position:absolute;
    z-index: 2;
    text-align: center;
    text-shadow: 3px 3px 5px #5555;
    color:white;
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
    align-items: flex-start;
    justify-content: center;
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
    }
`

const TimeLine = styled.div`
    display: flex;
    flex-direction: row;
    width:89%;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`

const HistoryEvent = styled.div`
    width:19vw;
    text-align: center;
    border-left: 1px solid #5B485C;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:12px;
    @media (max-width: 600px) {
        flex-direction: row;
        width:100%;
        text-align: left;
        border-left: none;
        border-top: #5B485C solid 1px;
    }
`

const Order = styled.div`
    color:#BE7E42;
    font-weight: 800;
    font-size: 17px;
    width:20vw;
`

const Details = styled.div`
    margin-top: 15px;
    font-size: 12px;
    @media (max-width: 600px) {
        margin-top: 0;
        width:35vw;
    }
`

const Date = styled.div`
    width:75px;
    text-align: center;
`