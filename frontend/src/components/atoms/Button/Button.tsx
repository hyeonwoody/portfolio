
import React, { Children } from 'react';
interface TitleProps{
    text? : string,
    children? : React.ReactNode
    onClick? : React.MouseEventHandler | undefined
    style? : React.CSSProperties
}

const Button = (props : TitleProps) => {

    return (
    <button 
        style={props.style}
        onClick={props.onClick}
    >
        {props.text}{props.children}</button>      
    )
};

export default Button;