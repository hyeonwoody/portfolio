
import React from 'react';
import '../Family/Family.css';

interface TitleProps{
    children : React.ReactNode
    style? : React.CSSProperties
}

const P = (props : TitleProps) => {
    const myStyle ={
        fontFamily: 'Nanum Gothic',
        marginBlockStart: '0px',
        marginBlockEnd: '0px',
    }

    const combinedStyles : React.CSSProperties = {
        ...props.style,
        ...myStyle,
    }

    return (
    <p style={combinedStyles}>
        {props.children}</p>      
    )
};

export default P;