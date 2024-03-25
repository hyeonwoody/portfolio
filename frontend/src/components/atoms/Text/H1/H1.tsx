
import React from 'react';
import './H1.css';

interface TitleProps{
    name : string,
}

const H1 = (props : TitleProps) => {
    const myStyle ={
        fontFamily: 'Kotra',
        fontSize: '40px',
    }

    return (
    <h1 style={myStyle}>
        {props.name}의 포트폴리오</h1>      
    )
};

export default H1;