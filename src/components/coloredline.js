import React from 'react'
const ColoredLine = ({ color, height, width}) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: height,
            width: width
        }}
    />
);
export default ColoredLine;