
import React from 'react';
import H1 from '../../atoms/Text/H1/H1'
import H2 from '../../atoms/Text/H2/H2'
interface TitleProps{
    name : string,
    style : React.CSSProperties
}

const Title = (props : TitleProps ) => {

    
    let size : number = 0;
    if (typeof props.style.fontSize === 'string' && props.style.fontSize.endsWith('rem')) {
        const fontSizeNumber = parseInt(props.style.fontSize.slice(0, -3), 10); // Extract number and convert to base 10
        size = fontSizeNumber;
    }
    if (size >= 3){
        return (<H1 name={props.name}></H1>)
    }
    else if (size >= 2){
        return <H2 style={props.style}>{props.name}</H2>
    }

};

export default Title;