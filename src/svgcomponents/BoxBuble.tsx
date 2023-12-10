import React from 'react';

// Define the props type
interface BoxBubleProps {
  className?: string;
  text?: string;  // Add a text prop
  width?: string;  // Width prop
  height?: string; // Height prop
  fontSize: string;
  positionX?: string; // X-axis position
  positionY?: string; // Y-axis position
  scale?: number;    // Scale of the speech bubble
}

const BoxBuble: React.FC<BoxBubleProps> = ({ 
    className, text, width = '500px', height = '500px', 
    fontSize, positionX = '0px', positionY = '0px', scale = 1 
}) => {
    const mangaFontStyle = {
        fontFamily: '"Comic Sans MS", cursive, sans-serif', // Manga-like font
        fontSize: fontSize,
    };

    // Apply scale and positioning
    const containerStyle = {
        transform: `translate(${positionX}, ${positionY}) scale(${scale})`,
        zIndex: 10, 
        width: width, 
        height: height,
    };

    return (
        <div className={`${className} absolute top-0 left-0`} style={containerStyle}>
            <p style={{
                ...mangaFontStyle,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)', // Center the text
                zIndex: 3,
                color: 'black',
            }}>
                {text}
            </p>
            {/* New SVG code */}
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="500" height="300" viewBox="0 0 500 300" xmlSpace="preserve" style={{ position: 'absolute', zIndex: 2, width: width, height: height }}>
                <desc>Created with Fabric.js 5.3.0</desc>
                <defs></defs>
                <g transform="matrix(1 0 0 1 250.612745098 150)" id="m-_ORZ4Dg0eL2k1yMn-FE"  >
                    <path style={{ stroke: 'white', strokeWidth: 2, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'white', fillRule: 'nonzero', opacity: 1, filter: 'url(#SVGID_98)' }} transform=" translate(0, 0)" d="M -242.03431 -143.68873 L 242.03431999999998 -143.68873 L 242.03431999999998 143.68872000000002 L -242.03431 143.68872000000002 L -242.03431 -143.68873" strokeLinecap="round" />
                    <filter id="SVGID_98" y="-20.69594883%" height="141.39189765999998%" x="-20.41316456%" width="140.82632912%" >
                        <feGaussianBlur in="SourceAlpha" stdDeviation="0"></feGaussianBlur>
                        <feOffset dx="2" dy="2" result="oBlur" ></feOffset>
                        <feFlood floodColor="rgb(137,137,137)" floodOpacity="0.5"/>
                        <feComposite in2="oBlur" operator="in" />
                        <feMerge>
                            <feMergeNode></feMergeNode>
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                    </filter>
                    <path style={{ stroke: 'rgb(0,0,0)', strokeWidth: 2, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1 }} transform=" translate(0, 0)" d="M -242.03431 -143.68873 L 242.03431999999998 -143.68873 L 242.03431999999998 143.68872000000002 L -242.03431 143.68872000000002 L -242.03431 -143.68873" strokeLinecap="round" />
                </g>
            </svg>
        </div>
    );
};

export default BoxBuble;

