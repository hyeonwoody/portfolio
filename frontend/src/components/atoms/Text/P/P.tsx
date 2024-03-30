
import React from 'react';
import '../Family/Family.css';

interface TitleProps{
    children : React.ReactNode
    style? : React.CSSProperties
}

const P = (props : TitleProps) => {
    const myStyle ={
        marginBlockStart: '0px',
        marginBlockEnd: '0px',
    }

    const combinedStyles : React.CSSProperties = {
        ...myStyle,
        ...props.style,
    }

    return (
    <p style={combinedStyles}>
        {props.children}</p>      
    )
};

export default P;