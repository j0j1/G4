const Arrow = ({fill1="#E8C996", fill2="#BE7E42", stroke="#303038", height, width, transform}) => {
    
    return(<>
        <svg 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            x="0px" 
            y="0px"
            height={height}
            width={width}
            viewBox="0 0 485.16 368.03" 
            xmlSpace="preserve"
            transform={transform}
            >
            
            <g id="Layer_1" fill={fill1}>
                <polygon className="st0" points="239.59,366.25 82.58,366.25 229.64,183.96 88.71,1.5 246.49,2.14 385.13,184.36 	"/>
            </g>
            <g id="Layer_2" fill={fill2} stroke={stroke} strokeWidth="3">
                <g>
                    <path className="st1" d="M220.48,1.75L369.21,183.6l-107.66,0.36l0,0l221.69,0.72c0.36,0,0.56-0.42,0.33-0.7L329.06,1.5L105.41,1.85
                        l0.24,0.29L220.48,1.75z"/>
                    <path className="st1" d="M369.2,184.67l-152.03,181.5l108.53,0.35l157.66-180.94c0.31-0.35,0.06-0.91-0.41-0.91l-221.4-0.72
                        l-0.47,0.53L369.2,184.67z"/>
                    <polygon className="st1" points="105.66,2.14 7,2.47 155.74,184.31 261.55,183.96 		"/>
                    <polyline className="st1" points="102.06,365.8 261.08,184.49 155.74,184.31 3.22,366.4 217.17,366.18 		"/>
                </g>
            </g>

        </svg>
    </>)

}

export default Arrow;