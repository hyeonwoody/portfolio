
import React from 'react';
import H1 from '../../atoms/Text/H1/H1'

interface TitleProps{
    name : string,
    size : number,
}

const Title = (props : TitleProps ) => {

    if (props.size >= 40){
        return (<H1 name={props.name}></H1>)
    }
    else if (props.size >= 20){
        return <h2>fsdfdsf</h2>
    }
    
};

export default Title;