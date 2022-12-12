const TriangleMotifVertical = ({fill1="coral", fill2="pink", fill3="grey", height, width, transform, xStart="0", yStart="0", xEnd="77.9", yEnd="337.9"}) => {

    const viewBoxDimensions = `${xStart} ${yStart} ${xEnd} ${yEnd}`

    return(<>
        
        
        <svg 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            x="0px" 
            y="0px"
            viewBox={viewBoxDimensions}
            height={height}
            width={width}
            transform={transform}
            xmlSpace="preserve">
        <g id="Layer_1" fill={fill1}>
            <polygon className="st0" points="38.95,296.31 21.53,318.75 56.36,318.75 	"/>
            <polygon className="st0" points="38.95,272.34 19.35,296.37 58.55,296.37 	"/>
            <polygon className="st0" points="38.95,243.24 16.04,272.33 61.85,272.33 	"/>
            <polygon className="st0" points="38.95,153.67 0,207.27 77.9,207.27 	"/>
            <polygon className="st0" points="38.95,207.3 10.64,243.25 67.25,243.25 	"/>
            <polygon className="st0" points="38.95,184.5 77.9,130.91 0,130.91 	"/>
            <polygon className="st0" points="38.6,41.66 56.01,19.22 21.18,19.22 	"/>
            <polygon className="st0" points="38.6,65.63 58.2,41.6 19,41.6 	"/>
            <polygon className="st0" points="38.6,94.73 61.5,65.64 15.69,65.64 	"/>
            <polygon className="st0" points="38.6,130.67 66.9,94.73 10.29,94.73 	"/>
        </g>
        <g id="Layer_2" fill={fill2}>
            <polygon className="st1" points="32.21,215.86 32.21,243.25 45.68,243.25 45.68,215.86 38.95,207.3 	"/>
            <polygon className="st1" points="34.6,324.98 34.6,337.97 43.29,337.97 43.29,324.98 38.95,318.75 	"/>
            <polygon className="st1" points="38.95,184.5 50.15,169.09 38.95,153.67 27.74,169.09 	"/>
            <polygon className="st1" points="45.33,122.11 45.33,94.73 31.86,94.73 31.86,122.11 38.6,130.67 	"/>
            <polygon className="st1" points="42.94,12.99 42.94,0 34.25,0 34.25,12.99 38.6,19.22 	"/>
        </g>
        <g id="Layer_3" fill={fill3}>
            <polygon className="st2" points="33.41,279.18 33.41,296.37 44.49,296.37 44.49,279.08 38.99,272.34 	"/>
            <polygon className="st2" points="44.14,58.79 44.14,41.6 33.05,41.6 33.05,58.89 38.56,65.63 	"/>
            <polygon className="st2" points="38.95,192.83 30.67,206.7 47.23,206.7 	"/>
            <polygon className="st2" points="38.95,145.34 47.23,131.48 30.67,131.48 	"/>
        </g>
        </svg>
    
    </>
    )
}

export default TriangleMotifVertical