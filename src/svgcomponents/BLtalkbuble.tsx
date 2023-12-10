import React from 'react';

// Define the props type
interface BLtalkbubleProps {
  className?: string;
  text?: string;  // Add a text prop
  width?: string;  // Width prop
  height?: string; // Height prop
  fontSize: string;
  positionX?: string; // X-axis position
  positionY?: string; // Y-axis position
  scale?: number;    // Scale of the speech bubble
}

const BLtalkbuble: React.FC<BLtalkbubleProps> = ({ 
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
                <g transform="matrix(1 0 0 1 246.3603592584 149.3908598223)" id="9BqpAJTmTV0EPWxQOip5P">
                    <path style={{ stroke: 'white', strokeWidth: 4, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'white', fillRule: 'nonzero', opacity: 1, filter: 'url(#SVGID_115)' }} d="M -243.95371 0.17507 C -240.30111 -79.52257999999999 -113.11410000000001 -143.49063999999998 14.160860000000014 -142.24317 C 131.00300000000001 -141.09796 247.72649 -86.32046 244.07389 0.17507000000000517 C 240.42129 86.67061000000001 199.93834 114.67385 92.49110000000002 132.27734 C -14.956139999999976 149.88083 -146.95694999999998 119.29033000000001 -146.95694999999998 119.29033000000001 L -236.85143 142.26111 L -200.93421999999998 101.43319 C -200.93421999999998 101.43319 -247.60629999999998 79.87272 -243.95369999999997 0.17506999999999096 z" />
                    <filter id="SVGID_115" y="-21.40586558%" height="142.81173116%" x="-20.81914359%" width="141.63828718%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="0" />
                        <feOffset dx="4" dy="4" result="oBlur" />
                        <feFlood floodColor="rgb(93,93,93)" floodOpacity="0.5" />
                        <feComposite in2="oBlur" operator="in" />
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <path style={{ stroke: 'rgb(0,0,0)', strokeWidth: 4, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1 }} d="M -243.95371 0.17507 C -240.30111 -79.52257999999999 -113.11410000000001 -143.49063999999998 14.160860000000014 -142.24317 C 131.00300000000001 -141.09796 247.72649 -86.32046 244.07389 0.17507000000000517 C 240.42129 86.67061000000001 199.93834 114.67385 92.49110000000002 132.27734 C -14.956139999999976 149.88083 -146.95694999999998 119.29033000000001 -146.95694999999998 119.29033000000001 L -236.85143 142.26111 L -200.93421999999998 101.43319 C -200.93421999999998 101.43319 -247.60629999999998 79.87272 -243.95369999999997 0.17506999999999096 z" />
                </g>
            </svg>
        </div>
    );
};

export default BLtalkbuble;
