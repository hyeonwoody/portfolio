
import React from 'react';
import '../Family/Family.css';

interface TitleProps{
    children : React.ReactNode
    style : React.CSSProperties
}

const H2 = (props : TitleProps) => {
    const myStyle ={
        fontFamily: 'Kotra',
        marginBlockStart: '0px',
        marginBlockEnd: '0px',
    }

    const combinedStyles : React.CSSProperties = {
        ...myStyle,
        ...props.style,
    }

    return (
    <h2 style={combinedStyles}>
        {props.children}</h2>      
    )
};

export default H2;