
import React from 'react';
import H1 from '../../atoms/Text/H1/H1'
import H2 from '../../atoms/Text/H2/H2'
interface TitleProps{
    name : string,
    size : number,
}

const Title = (props : TitleProps ) => {

    if (props.size >= 40){
        return (<H1 name={props.name}></H1>)
    }
    else if (props.size >= 30){
        return <H2>{props.name}</H2>
    }
    
};

export default Title;