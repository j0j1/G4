import styled from "styled-components";
import Arrow from "../../Geometrics/Arrow";
import StoneyMotif2 from "../../Geometrics/StoneyMotif2";
import LogoRange from "../../Geometrics/LogoRange";
import { Section, SectionLeft, SectionRight } from "../../AnimationPresets/AnimationPresets";
import StarBlanket from "../../Geometrics/StarBlanket";
import { motion } from "framer-motion";


const Education = () => {
    const colors = ["#303038", "#6DB1C7", "#ED7268", "#E8C996", "#BE7E42", "#5B485C", "#963A3E"];

    return (
        <Wrapper>
            <Banner>
                <Logo>
                    
                    <h1 style={{fontSize:"15vw"}}>G4 </h1>
                    <h1 style={{fontSize:"15vw"}}>EDUCATION</h1>
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
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"70vw"} fill1={colors[7]} fill2={colors[1]} fill3={colors[0]} fill4={colors[2]}/>
            </SectionLeft>
            <Section>
                <HorizontalChunk>
                    <div style={{maxWidth:"300px"}}>
                    <h1>What we Believe about Education </h1>
                    </div>
                    <TextChunk>
                        <p>From our own personal experience, the team in the education department believes in the power of education to transform the lives of individuals, families, and communities for the better. Sadly, this has not been our historical experience of education as a Treaty Right. Instead, education was used as a weapon against us, as part of a process of cultural genocide. Thankfully, the time has now come when the vision our leader originally had of the empowering role of education in our First Nations can be fulfilled. We can use our spiritual, collaborative, and creative knowledge and abilities to enhance what we learn and make it work for us, rather than dominate us. We can use education and training to meet all the needs of our communities and stand tall and independent and even help out our western neighbours.
                        </p>
                    </TextChunk>
                </HorizontalChunk>
            </Section>
            <SectionLeft>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"} fill1={colors[7]} fill2={colors[1]} fill3={colors[0]} fill4={colors[2]} transform={"scale(1,-1)"}/>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"} fill1={colors[7]} fill2={colors[1]} fill3={colors[0]} fill4={colors[2]}/>
            </SectionLeft>

            <Section>
                <LeftChunk>
                    <div style={{maxWidth:"400px"}}>
                        <h1>G4 Education:</h1>
                    </div>
                    <TextChunk>
                        <p>We recognise the unique power that our worldview brings, and we must not surrender that to obtain a western education. Wherever possible, training and education should be made available within our Nations and delivered using our values. Education and training should be delivered thoughtfully and purposefully, so as to enable every member of our communities to find success and be proud of who they are and what they bring to those around them, as they develop and use the abilities the Creator has planted in them.
                        </p>
                    </TextChunk>
                </LeftChunk>
            </Section>
            
            <SectionRight>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"}  fill1={colors[7]} fill2={colors[1]} fill3={colors[0]} fill4={colors[2]} transform={"scale(-1,-1)"}/>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"}  fill1={colors[7]} fill2={colors[1]} fill3={colors[0]} fill4={colors[2]}  transform={"scale(-1,1)"}/>
            </SectionRight>
            <Section>
                <TopChunk>
                    <div style={{maxWidth:"400px"}}>
                        <h1>Education and Training Activities</h1>
                    </div>
                    <TextChunk>
                        <p>
                            Since our formation some three years ago, we have taken on a number of changing and developing roles. Initially, we worked hard on getting grant monies from the provincial and federal governments which was channelled into the school systems on the Nations. We ran a teaching staff professional development conference, organized connections with City University to enable teachers to pursue their master’s degree. One of the funest things we did was to organize a youth conference at the Grey Eagle Resort to bring together school age youth from across our four First Nations. The theme of the conference was that they should have confidence about their future and what they could accomplish. We had many First Nations speakers and guests who spoke about their path to personal and community accomplishment. Several colleges and universities attended the conference to share their information with our youth.
                        </p>
                    </TextChunk>
                </TopChunk>
            </Section>
            <SectionLeft>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"} fill1={colors[7]} fill2={colors[1]} fill3={colors[0]} fill4={colors[2]} transform={"scale(1,-1)"}/>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"} fill1={colors[7]} fill2={colors[1]} fill3={colors[0]} fill4={colors[2]}/>
            </SectionLeft>
            <Section>
                <HorizontalChunk>
                    <div style={{maxWidth:"400px"}}>
                        <h1>Career Camps:</h1>
                    </div>
                    <TextChunk>
                        <p>
                        We believe that an important part of supporting individuals on their career paths is empowering them with experience, so that they can make informed decisions about what they might want to do - that is part of the pattern of setting people up for success. On several occasions we have gone into our schools in Eden Valley, Mini Thini, and Tsuut’ina and offered Career Camps where students could try out a wide range of skills such as the arts, baking, catering, computing, confined spaces, construction, design, electrics, office software use, plumbing, and even video production.
                        <br/>
                        <br/>
                        Several of the programs included industry ready certification, such as Working at Height, Working in Confined Spaces, Fall Protection, First Aid, H2S Alive, Heart & Stroke, and WMIS.
                        </p>
                    </TextChunk>
                </HorizontalChunk>
            </Section>
            <SectionRight>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"}  fill1={colors[7]} fill2={colors[1]} fill3={colors[0]} fill4={colors[2]} transform={"scale(-1,-1)"}/>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"}  fill1={colors[7]} fill2={colors[1]} fill3={colors[0]} fill4={colors[2]}  transform={"scale(-1,1)"}/>
            </SectionRight>
            <Section>
                <HorizontalChunk>
                    <div style={{maxWidth:"400px"}}>
                        <h1>Career Camps</h1>
                    </div>
                    <TextChunk>
                        <p>Probably the most popular course we ran with trainees was the construction of large professional style sheds. This included learning a wide variety of skills such as constructing a floor, wooden walls, adding a door, windows, and a roof.
                        </p>
                        <p>We have partnered with both Chiniki College and Tsuut’ina's Sparrow's Nest on a number of occasions to bring such programs to adult members of our communities too.  
                        </p>
                        <p>A recent major project for us was obtaining the funding to run a year long Health Care Aide certificate in collaboration with NorQuest College and Bow Valley College. This certification, which is recognised right across Canada, means that the trainees are qualified to walk into a job as a Health Care Aide worker anywhere. Not only that, but they can also start to meet the needs within our own communities caring for the elderly and needy.</p>
                        <p>We work hard to obtain all of the funding from the government to run these programs at no cost to the individuals who attend them.
                        </p>
                    </TextChunk>
                </HorizontalChunk>
            </Section>
            <SectionRight>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"}  fill1={colors[7]} fill2={colors[1]} fill3={colors[0]} fill4={colors[2]} transform={"scale(-1,-1)"}/>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"}  fill1={colors[7]} fill2={colors[1]} fill3={colors[0]} fill4={colors[2]}  transform={"scale(-1,1)"}/>
            </SectionRight>
            <Section>
                <HorizontalChunk>
                    <h1>Dual Credit:</h1>
                    <TextChunk>
                        <p> We have recently also obtained government funding to run programs called Dual Credit, which help students in high school transition into employment, Advanced Education, or further training. Our first program was a collaboration with the Academy of the massive international IT company, Cisco. From this program, students were able to earn high school credits at the same time as gaining industry certification. Hopefully, this has planted the seeds for some IT experts to grow within our communities. This coming year will see the expansion of this program, adding free access to the University of Calgary first year Psychology course, plus a collaboration for free access to first year courses at Athabasca University.
                        </p>
                    </TextChunk>
                </HorizontalChunk>
            </Section>
            <SectionLeft>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"}  fill1={colors[7]} fill2={colors[1]} fill3={colors[0]} fill4={colors[2]}  transform={"scale(1,-1)"}/>
                <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"}  fill1={colors[7]} fill2={colors[1]} fill3={colors[0]} fill4={colors[2]}  transform={"scale(1,1)"}/>
            </SectionLeft>
            <Section>
                <TextChunk style={{margin:"auto"}}>
                    <h1 style={{textAlign:"right", paddingRight:"10%", marginTop:"-5vw"}}>Education Policy:</h1>
                    
                    <p style={{paddingTop:"5%"}}>In addition to our focus on hands on education and training across the G4 nations, we have been very active in challenging the government on matters of policy. For example, we drafted a full response document to the recent K-6 curriculum proposals which brought the Indigenous Relations Minister, Rick Wilson the Education Minister, Adriana LaGrange to a meeting with all of our G4 Chiefs so they could advise her on where things needed to be improved.
                    </p>
                    <p>Following that meeting, a regular meeting (or Table) has been established between G4 Education and the Education and Advanced Education ministries of Alberta where we are addressing issues of concern raised by our Chiefs. The matters are wide ranging and include:</p>
                        <ul> 
                            <li>The lack of representation of our First Nations in high school curriculum off reserve</li>
                            <li> Equal access through the G4 nations to postsecondary education and training for all those who desire it</li>
                            <li>Protecting G4 First Nation intellectual property</li>
                            <li>The accuracy and quality of the teaching of our G4 related curriculum off reserve</li>
                        </ul>
                    <p>We are committed to working equally across all of the G4 communities to enable education to play its full role in empowering all of our people.</p>
                    </TextChunk>

            </Section>
            <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"}  fill1={colors[7]} fill2={colors[1]} fill3={colors[0]} fill4={colors[2]} transform={"scale(-1,-1)"} />
        </Wrapper>
    )
};

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
    gap:50px;
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
`

export default Education;