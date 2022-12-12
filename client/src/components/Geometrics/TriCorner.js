import styled from "styled-components"

const TriCorner = ({scale, color, orientation}) => {

    return (
        <>
        {orientation==="bottomLeft" 
            && <div style={{ 
                width:"0",
                height:"0",
                borderBottom:`${scale}px solid ${color}`,
                borderRight:`${scale}px solid transparent`
                }}/>}

        {orientation==="bottomRight" 
            && <div style={{ 
                width:"0",
                height:"0",
                borderBottom:`${scale}px solid ${color}`,
                borderLeft:`${scale}px solid transparent`
                }}/>}
        
        {orientation==="topRight" 
            && <div style={{ 
                width:"0",
                height:"0",
                borderTop:`${scale}px solid ${color}`,
                borderLeft:`${scale}px solid transparent`
                }}/>}

        {orientation==="topLeft" 
            && <div style={{ 
                width:"0",
                height:"0",
                borderTop:`${scale}px solid ${color}`,
                borderRight:`${scale}px solid transparent`
                }}/>}
    </>
    )
}

export default TriCorner;