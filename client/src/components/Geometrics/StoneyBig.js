import StoneyMotif2 from "./StoneyMotif2"

const StoneyBig = () => {

    return (<>
        <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"} transform={"scale(1,-1)"}/>
        <div style={{marginTop:"-2px"}}>
            <StoneyMotif2 xStart={"545"} yStart={"500"} yEnd={"250"} xEnd={"900"} width={"100vw"}/>
        </div>
    </>)
}

export default StoneyBig