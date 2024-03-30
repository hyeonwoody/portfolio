
import React from 'react';


const TextSize = (size : number) => {
    const myStyle ={
        fontSize: '{number}px'
    }

    return (
    <h1 style={myStyle}>
        {size}의 s포트폴리오</h1>      
    )
};

export default TextSize;