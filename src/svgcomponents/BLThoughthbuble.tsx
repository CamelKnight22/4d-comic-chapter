import React from 'react';

// Define the props type
interface BLThoughthbubleProps {
  className?: string;
  text?: string;  // Add a text prop
  width?: string;  // Width prop
  height?: string; // Height prop
  fontSize: string;
  positionX?: string; // X-axis position
  positionY?: string; // Y-axis position
  scale?: number;    // Scale of the speech bubble
}

const BLThoughthbuble: React.FC<BLThoughthbubleProps> = ({ 
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
                top: '45%',
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
    <g transform="matrix(10.809631957 0 0 6.1682923057 260.0758795571 130.3222205373)" id="Q9FQRb9C80189tShF0Awp">
        <path style={{ stroke: 'black', strokeWidth: 0.5, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'white', fillRule: 'nonzero', opacity: 1, filter: 'url(#SVGID_12)' }} transform="translate(0, 0)" d="M 0 -20.29221 C 11.2013 -20.29221 20.29221 -11.201300000000002 20.29221 0 C 20.29221 11.2013 11.201300000000002 20.29221 0 20.29221 C -11.2013 20.29221 -20.29221 11.201300000000002 -20.29221 0 C -20.29221 -11.2013 -11.201300000000002 -20.29221 0 -20.29221 z" strokeLinecap="round" />
        <filter id="SVGID_12" y="-22.464%" height="144.928%" x="-22.464%" width="144.928%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0"></feGaussianBlur>
            <feOffset dx="1" dy="1" result="oBlur"></feOffset>
            <feFlood flood-color="rgb(93,93,93)" flood-opacity="0.5" />
            <feComposite in2="oBlur" operator="in" />
            <feMerge>
                <feMergeNode></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
        </filter>
    </g>
    <g transform="matrix(2.2459049508 0 0 1.2905509766 89.3512849412 258.5746358798)" id="K1kFrbSRagpYtV95dVHjP">
        <path style={{ stroke: 'black', strokeWidth: 2, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'white', fillRule: 'nonzero', opacity: 1, filter: 'url(#SVGID_18)' }} transform="translate(0, 0)" d="M 0 -20.29221 C 11.2013 -20.29221 20.29221 -11.201300000000002 20.29221 0 C 20.29221 11.2013 11.201300000000002 20.29221 0 20.29221 C -11.2013 20.29221 -20.29221 11.201300000000002 -20.29221 0 C -20.29221 -11.2013 -11.201300000000002 -20.29221 0 -20.29221 z" strokeLinecap="round" />
        <filter id="SVGID_18" y="-24.928%" height="149.856%" x="-24.928%" width="149.856%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0"></feGaussianBlur>
            <feOffset dx="2" dy="2" result="oBlur"></feOffset>
            <feFlood flood-color="rgb(93,93,93)" flood-opacity="0.5" />
            <feComposite in2="oBlur" operator="in" />
            <feMerge>
                <feMergeNode></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
        </filter>
    </g>
    <g transform="matrix(0.935898529 0 0 0.5377897939 27.6588515507 285.4080399509)" id="42oji9VrrJx0fmcZ2nouR">
        <path style={{ stroke: 'black', strokeWidth: 3, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'white', fillRule: 'nonzero', opacity: 1, filter: 'url(#SVGID_22)' }} transform="translate(0, 0)" d="M 0 -20.29221 C 11.2013 -20.29221 20.29221 -11.201300000000002 20.29221 0 C 20.29221 11.2013 11.201300000000002 20.29221 0 20.29221 C -11.2013 20.29221 -20.29221 11.201300000000002 -20.29221 0 C -20.29221 -11.2013 -11.201300000000002 -20.29221 0 -20.29221 z" strokeLinecap="round" />
        <filter id="SVGID_22" y="-27.392%" height="154.784%" x="-27.392%" width="154.784%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0"></feGaussianBlur>
            <feOffset dx="3" dy="3" result="oBlur"></feOffset>
            <feFlood flood-color="rgb(93,93,93)" flood-opacity="0.5" />
            <feComposite in2="oBlur" operator="in" />
            <feMerge>
                <feMergeNode></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
        </filter>
    </g>

</svg>

        </div>
    );
};

export default BLThoughthbuble;
