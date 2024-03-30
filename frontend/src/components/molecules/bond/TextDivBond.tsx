import React from 'react';

import P from '../../atoms/Text/P/P';
import Button from '../../atoms/Button/Button';



interface TextButtonBondProps{
    divStyle : React.CSSProperties,
    textStyle : React.CSSProperties
    children : string
}

const TextButtonBond = (props : TextButtonBondProps) => {
    
    return (
        <div style={props.divStyle}>
            <P style={props.textStyle}>
                {props.children}
            </P>
        </div>
        
    );
    
};

export default TextButtonBond;