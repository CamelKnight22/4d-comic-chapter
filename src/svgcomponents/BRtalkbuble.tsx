import React from 'react';

// Define the props type
interface BRtalkbubleProps {
  className?: string;
  text?: string;  // Add a text prop
  width?: string;  // Width prop
  height?: string; // Height prop
  fontSize: string;
  positionX?: string; // X-axis position
  positionY?: string; // Y-axis position
  scale?: number;    // Scale of the speech bubble
}

const BRtalkbuble: React.FC<BRtalkbubleProps> = ({ 
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
                <g transform="matrix(1 0 0 1 248.4516598692 150.0006480818)" id="9BqpAJTmTV0EPWxQOip5P">
                    <path style={{ stroke: 'white', strokeWidth: 4, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'white', fillRule: 'nonzero', opacity: 1, filter: 'url(#SVGID_412)' }} d="M -242.39241 -0.00065 C -240.36319 -74.42232 -114.79956000000001 -143.49129000000002 12.47539999999998 -142.24382 C 129.31753999999998 -141.09861 246.04102999999998 -86.32111 242.38842999999997 0.1744199999999978 C 238.73582999999996 86.66996 201.19525 95.75072 201.19525 95.75072 L 242.38842999999997 142.26046 L 124.28777999999997 114.8254 C 124.28777999999997 114.8254 -9.894440000000031 138.11071 -108.86969000000002 119.28969000000001 C -207.84493000000003 100.46867 -244.42164000000002 74.42103 -242.39242000000002 -0.0006399999999899819 z" />
                    <filter id="SVGID_412" y="-21.40587198%" height="142.81174396%" x="-20.82483757%" width="141.64967514%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="0" />
                        <feOffset dx="4" dy="4" result="oBlur" />
                        <feFlood floodColor="rgb(93,93,93)" floodOpacity="0.5" />
                        <feComposite in2="oBlur" operator="in" />
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <path style={{ stroke: 'rgb(0,0,0)', strokeWidth: 4, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1 }} d="M -242.39241 -0.00065 C -240.36319 -74.42232 -114.79956000000001 -143.49129000000002 12.47539999999998 -142.24382 C 129.31753999999998 -141.09861 246.04102999999998 -86.32111 242.38842999999997 0.1744199999999978 C 238.73582999999996 86.66996 201.19525 95.75072 201.19525 95.75072 L 242.38842999999997 142.26046 L 124.28777999999997 114.8254 C 124.28777999999997 114.8254 -9.894440000000031 138.11071 -108.86969000000002 119.28969000000001 C -207.84493000000003 100.46867 -244.42164000000002 74.42103 -242.39242000000002 -0.0006399999999899819 z" />
                </g>
            </svg>
        </div>
    );
};

export default BRtalkbuble;
