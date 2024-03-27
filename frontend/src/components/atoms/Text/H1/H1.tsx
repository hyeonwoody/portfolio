
import React from 'react';
import '../Family/Family.css';

interface TitleProps{
    name : string,
    style? : React.CSSProperties
}

const H1 = (props : TitleProps) => {
    const myStyle ={
        fontFamily: 'Kotra',
        fontSize: '40px',
        marginBlockEnd: '0px',
    }

    return (
    <h1 style={myStyle}>
        {props.name}의 포트폴리오</h1>      
    )
};

export default H1;