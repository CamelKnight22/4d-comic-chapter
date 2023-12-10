import React from 'react';

// Define the props type
interface ShoutbubleProps {
  className?: string;
  text?: string;  // Add a text prop
  width?: string;  // Width prop
  height?: string; // Height prop
  fontSize: string;
  positionX?: string; // X-axis position
  positionY?: string; // Y-axis position
  scale?: number;    // Scale of the speech bubble
}

const Shoutbuble: React.FC<ShoutbubleProps> = ({ 
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
                <g transform="matrix(1 0 0 1 250.5173851067 148.7824675325)" id="9BqpAJTmTV0EPWxQOip5P">
                    <path style={{ stroke: 'white', strokeWidth: 4, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'white', fillRule: 'nonzero', opacity: 1, filter: 'url(#SVGID_413)' }} d="M -187.00565 49.70719 L -242.09612 -11.16968 L -197.5576 -41.86183 L -225.155 -128.37128 L -95.13982999999999 -95.38449000000001 L -49.72829999999999 -143.26675 L 16.33984000000001 -100.43829 L 118.29350000000001 -134.0531 L 136.75941 -76.33552 L 231.11264 -112.45565 L 193.78051 -11.16968 L 242.09611999999998 40.85709 L 189.31622 67.13039 L 208.18796999999998 143.26675 L 115.85841999999998 80.98977 L 41.27344999999998 137.46496 L -16.82143000000002 100.00376999999999 L -99.03688000000002 137.46496 L -125.98400000000002 77.33716999999999 L -233.97924 137.46496 z" />
                    <filter id="SVGID_413" y="-21.39599731%" height="142.79199462%" x="-20.82611816%" width="141.65223632%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="0" />
                        <feOffset dx="4" dy="4" result="oBlur" />
                        <feFlood floodColor="rgb(93,93,93)" floodOpacity="0.5" />
                        <feComposite in2="oBlur" operator="in" />
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <path style={{ stroke: 'rgb(0,0,0)', strokeWidth: 4, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1 }} d="M -187.00565 49.70719 L -242.09612 -11.16968 L -197.5576 -41.86183 L -225.155 -128.37128 L -95.13982999999999 -95.38449000000001 L -49.72829999999999 -143.26675 L 16.33984000000001 -100.43829 L 118.29350000000001 -134.0531 L 136.75941 -76.33552 L 231.11264 -112.45565 L 193.78051 -11.16968 L 242.09611999999998 40.85709 L 189.31622 67.13039 L 208.18796999999998 143.26675 L 115.85841999999998 80.98977 L 41.27344999999998 137.46496 L -16.82143000000002 100.00376999999999 L -99.03688000000002 137.46496 L -125.98400000000002 77.33716999999999 L -233.97924 137.46496 z" />
                </g>
            </svg>
        </div>
    );
};

export default Shoutbuble;
